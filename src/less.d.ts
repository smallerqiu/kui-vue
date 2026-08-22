declare module "less" {
  const less: {
    render(source: string, options?: { filename?: string }): Promise<{ css: string }>;
  };
  export default less;
}
