import Vue from "vue";

/** Upload component props */
export interface UploadProps {
  /** default: post */
  method?: string;
  /** default: file */
  name?: string;
  action?: string;
  /** default: list */
  type?: string;
  /** default: undefined */
  data?: Record<string, any>;
  disabled?: boolean;
  directory?: boolean;
  multiple?: boolean;
  accept?: string;
  headers?: Record<string, any>;
  /** default: true */
  showUploadList?: boolean;
  transformFile?: (...args: any[]) => any;
  fileList?: any[];
  /** default: true */
  autoTrigger?: boolean;
  limit?: number;
  minSize?: number;
  maxSize?: number;
  uploadText?: string;
  uploadSubText?: string;
  uploadIcon?: string | any[];
  draggable?: boolean;
}

declare class Upload extends Vue {
  $props: UploadProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Upload;
