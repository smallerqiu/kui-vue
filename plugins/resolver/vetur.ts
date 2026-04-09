import fs from "fs";
import path from "path";
import { Node, Project, TypeFormatFlags } from "ts-morph";
import { JsxEmit } from "typescript";

/**
 * 解析 Markdown 表格提取属性和描述
 * @param mdPath Markdown 文件路径
 */
const getDocDescriptions = (mdPath: string): Record<string, string> => {
  const descriptions: Record<string, string> = {};
  if (!fs.existsSync(mdPath)) return descriptions;

  const content = fs.readFileSync(mdPath, "utf-8");
  const lines = content.split('\n'); // 按行处理
  
  lines.forEach(line => {
    // 通过 | 分割并过滤掉两侧的空字符串（解决错位关键）
    const columns = line.split('|').map(c => c.trim()).filter(c => c !== '');
    
    // 确保这一行至少有属性名和描述两列
    if (columns.length >= 2) {
      const rawProp = columns[0];
      const description = columns[1];
      
      // 排除表头 "Property" 和 分割线 "---"
      if (rawProp.toLowerCase() !== 'property' && !rawProp.includes('---')) {
        // 统一小写存储，确保 offsetTop 能匹配到 offsettop
        descriptions[rawProp.toLowerCase()] = description;
      }
    }
  });
  
  return descriptions;
};

// 初始化 ts-morph 项目
const project = new Project({
  compilerOptions: {
    skipLibCheck: true,
    jsx: JsxEmit.Preserve,
    moduleResolution: 2, // Node 模式
    allowJs: true,
    esModuleInterop: true,
  },
});

// 预加载所有组件源码以建立类型上下文
project.addSourceFilesAtPaths(path.resolve(__dirname, "../../components/**/*.ts"));
project.addSourceFilesAtPaths(path.resolve(__dirname, "../../components/**/*.tsx"));

/**
 * 提取组件的 Props 属性并关联文档描述
 */
export const getPropsData = (componentPath: string, propsName: string, componentName: string) => {
  const sourceFile =
    project.getSourceFile(componentPath) || project.addSourceFileAtPath(componentPath);
  const exportSymbols = sourceFile.getExportSymbols();
  const targetSymbol = exportSymbols.find((s) => s.getName() === propsName);

  if (!targetSymbol) return [];

  // 追踪重定向（解决 export { Props } from './xxx' 的问题）
  const aliasedSymbol = targetSymbol.getAliasedSymbol() || targetSymbol;
  const declarations = aliasedSymbol.getDeclarations();
  if (declarations.length === 0) return [];

  // 定位组件真实的物理目录并读取 md
  const componentDir = path.dirname(declarations[0].getSourceFile().getFilePath());
  const mdPath = path.join(componentDir, "index.en_US.md");
  const docMap = getDocDescriptions(mdPath);

  const type = aliasedSymbol.getDeclaredType();
  const properties = type.getApparentProperties(); // 获取包含继承的所有属性

  const props: { name: string; description: string; type: string }[] = [];

  properties.forEach((prop) => {
    const name = prop.getName();
    if (name.startsWith("_")) return;

    // 提取真实 TS 类型字符串
    const propType = prop
      .getTypeAtLocation(declarations[0])
      .getText(undefined, TypeFormatFlags.UseAliasDefinedOutsideCurrentScope);

    // 匹配描述：优先 MD 表格（全小写匹配），次之 JSDoc
    const lowerName = name.toLowerCase();
    let description = docMap[lowerName];

    const propDecls = prop.getDeclarations();
    if (!description && propDecls.length > 0 && Node.isJSDocable(propDecls[0])) {
      description = propDecls[0]
        .getJsDocs()
        .map((doc) => doc.getCommentText())
        .join(" ");
    }

    // 缺失文档提醒
    // TODO : 缺少文档, 需要补全, 待完善
    // console.log('lowerName :',lowerName)
    // console.log('docMap:',docMap)
    if (!docMap[lowerName]) {
      console.warn(
        `\x1b[33m[Vetur Warning]\x1b[0m Component <${componentName}>: Property "${name}" is missing in index.en_US.md`
      );
    }

    props.push({
      name,
      description: description || `Props for ${name}`,
      type: propType,
    });
  });

  return props;
};

/**
 * 生成 Vetur 配置文件
 */
export const generateVeturConfig = (componentNames: string[]) => {
  const tags: Record<string, any> = {};
  const attributes: Record<string, any> = {};

  // 组件库总入口文件
  const entryFilePath = path.resolve(__dirname, "../../components/index.ts");
  // componentNames = componentNames.slice(0, 1);
  componentNames.forEach((name) => {
    const kebabName = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const propsName = `${name}Props`;

    const propList = getPropsData(entryFilePath, propsName, name);

    // 写入 tags.json 定义
    tags[kebabName] = {
      description: `Kui Vue component: ${name}`,
      attributes: propList.map((p) => p.name),
    };

    // 写入 attributes.json 定义
    propList.forEach((p) => {
      attributes[`${kebabName}/${p.name}`] = {
        description: p.description,
        type: p.type,
        // 如果是布尔值，Vetur 会提供特定的补全
        options: p.type.includes("boolean") ? ["true", "false"] : undefined,
      };
    });
  });

  const distDir = path.resolve(__dirname, "../../vetur");
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

  fs.writeFileSync(path.resolve(distDir, "tags.json"), JSON.stringify(tags, null, 2));
  fs.writeFileSync(path.resolve(distDir, "attributes.json"), JSON.stringify(attributes, null, 2));

  console.log(
    "\x1b[32mVetur tags and attributes generated successfully in /vetur directory.\x1b[0m"
  );
};
