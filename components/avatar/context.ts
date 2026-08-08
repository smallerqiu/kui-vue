import type { InjectionKey, Ref } from "vue";

export type AvatarShape = "circle" | "square";
export type AvatarSize = number | "large" | "small" | "default";

export interface AvatarGroupContext {
  shape: Ref<AvatarShape>;
  size: Ref<AvatarSize>;
}

export const avatarGroupContextKey: InjectionKey<AvatarGroupContext> = Symbol("avatar-group");
