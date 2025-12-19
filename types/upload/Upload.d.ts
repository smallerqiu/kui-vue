import Vue, { VueConstructor } from "vue";

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
  uploadIcon?: string | Record<string, any> | any[];
  draggable?: boolean;
}

/** Upload component instance */
export interface Upload extends Vue {
  $props: UploadProps;
  $emit(event: string, ...args: any[]): void;
}

/** Upload Vue component type */
declare const Upload: VueConstructor<Upload>;

export default Upload;
