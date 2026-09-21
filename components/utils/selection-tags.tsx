import type { VNodeChild } from "vue";
import type { ShapeType, SizeType, ThemeType } from "../const/types";
import Space from "../space";
import Tag from "../tag";
import Tooltip from "../tooltip";

interface SelectionTagsOptions {
  labels: VNodeChild[];
  maxTagCount?: number;
  size?: SizeType;
  shape?: ShapeType;
  theme?: ThemeType;
  disabled?: boolean;
  readOnly?: boolean;
  onRemove: (index: number) => void;
  overflowSize?: SizeType;
  tagClass?: string;
  restClass?: string;
  tooltipClass?: string;
}

// Keep overflow indexes tied to the original selection, including maxTagCount=0.
export function renderSelectionTags({
  labels,
  maxTagCount,
  size = "medium",
  shape,
  theme,
  disabled,
  readOnly,
  onRemove,
  overflowSize = size,
  tagClass,
  restClass,
  tooltipClass,
}: SelectionTagsOptions) {
  const count =
    typeof maxTagCount === "number" && Number.isFinite(maxTagCount)
      ? Math.max(0, Math.floor(maxTagCount))
      : labels.length;
  const renderTag = (label: VNodeChild, index: number, overflow = false) => (
    <Tag
      key={`${label}-${index}`}
      class={overflow ? undefined : tagClass}
      size={overflow ? overflowSize : size}
      shape={shape}
      theme={theme}
      compact
      closeable={!disabled && !readOnly}
      onClose={() => onRemove(index)}
    >
      {label}
    </Tag>
  );
  const tags = labels.slice(0, count).map((label, index) => renderTag(label, index));
  const hidden = labels.slice(count);
  const preview = (
    <Space wrap size={4} theme-mode="dark">
      {hidden.map((label, index) => renderTag(label, count + index, true))}
    </Space>
  );
  if (hidden.length)
    tags.push(
      <Tooltip
        key="tag-more"
        title={tooltipClass ? <div class={tooltipClass}>{preview}</div> : preview}
      >
        <Tag class={restClass} size={size} shape={shape} theme={theme} compact>
          +{hidden.length}...
        </Tag>
      </Tooltip>,
    );
  return tags;
}
