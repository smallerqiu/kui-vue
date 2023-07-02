需要设置git 文件大小写敏感
git config core.ignorecase false


构建前请移除如下代码：
* at \@vue\cli-service\lib\commands\build\resolveLibConfig.js
* remove line 113 - 115 at :rawConfig.entry = { ... }
* remove line 120 at: libraryTarget: format,
* remove line 127 at:filename: `${entryName}.js`,