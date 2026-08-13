import type { UploadStatusType } from "../const/types";

export interface UploadFile {
  uid?: string;
  url?: string;
  filename?: string;
  size?: string;
  status?: UploadStatusType;
  percent?: number;
  preview?: string | null;
  response?: unknown;
  errorText?: string;
  xhr?: XMLHttpRequest;
}

export interface UploadChangeEvent {
  file: UploadFile;
  fileList: UploadFile[];
}
