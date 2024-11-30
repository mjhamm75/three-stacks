declare global {
  interface Window {
    api: {
      getProcessRunningTime: (port: number) => Promise<string>;
    };
  }
}
