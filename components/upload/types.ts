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

export interface UploadSortEvent extends UploadChangeEvent {
  oldIndex: number;
  newIndex: number;
}

export interface UploadRequestOptions {
  action?: string;
  method: string;
  name: string;
  file: File | Blob;
  filename: string;
  data: Record<string, string | number | boolean | Blob>;
  headers: Record<string, string>;
  withCredentials: boolean;
  timeout: number;
  onProgress: (percent: number) => void;
  onSuccess: (response?: unknown) => void;
  onError: (error?: unknown) => void;
}

export interface UploadRequestHandle {
  abort: () => void;
}

export type UploadCustomRequest = (
  options: UploadRequestOptions,
) => void | UploadRequestHandle | Promise<void | UploadRequestHandle>;
