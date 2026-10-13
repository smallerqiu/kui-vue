import { h } from "vue";
import { modal, type ModalApiProps } from "kui-vue";
import type {
  BadgeStatusType,
  CheckboxOption,
  Column,
  FeedbackPanelKind,
  FlexAlignType,
  FlexJustifyType,
  FlexSizeType,
  FormSubmitEvent,
  IconType,
  InputOTPValidator,
  MenuOptionsProps,
  MenuSelectEvent,
  ProgressStatus,
  ProgressStroke,
  ProgressType,
  QRCodeErrorLevel,
  QRCodeRef,
  QRCodeStatus,
  RadioOption,
  ResultStatus,
  SelectOption,
  SortState,
  StatNumberItem,
  TableKey,
  TableRecord,
  TimelineMode,
  TreeExpandEvent,
  UploadChangeEvent,
  UploadFile,
  WatermarkFont,
  WatermarkLayoutType,
  WatermarkTextItem,
} from "kui-vue";

export type PublicTypeContract = [
  BadgeStatusType,
  CheckboxOption,
  Column,
  FeedbackPanelKind,
  FlexAlignType,
  FlexJustifyType,
  FlexSizeType,
  FormSubmitEvent,
  IconType,
  InputOTPValidator,
  MenuOptionsProps,
  MenuSelectEvent,
  ProgressStatus,
  ProgressStroke,
  ProgressType,
  QRCodeErrorLevel,
  QRCodeRef,
  QRCodeStatus,
  RadioOption,
  ResultStatus,
  SelectOption,
  SortState,
  StatNumberItem,
  TableKey,
  TableRecord,
  TimelineMode,
  TreeExpandEvent,
  UploadChangeEvent,
  UploadFile,
  WatermarkFont,
  WatermarkLayoutType,
  WatermarkTextItem,
];

/**
 * 命令式弹窗（modal.info(...) 这类）的 title / content 是"任意节点"，不锁字符串：
 * react 侧同一字段是 ReactNode，vue 这边给 VNodeChild。这两个常量是类型面的钉子，
 * 哪天谁把它退回 string，pnpm typecheck:exports 就会红（运行时用例看不出类型收窄）。
 */
export const modalApiRichContent: ModalApiProps = {
  title: h("strong", "标题"),
  content: [h("p", "第一段"), h("p", "第二段")],
};

// 两个字段都可省：只要一个 onOk 回调也能开二次确认
export const modalApiOptionalFields: ModalApiProps = { onOk: () => {} };

// 调用点一起过类型，确认 VNode 参数在 modal.info 上合法
export const openRichModal = () => modal.info(modalApiRichContent);
