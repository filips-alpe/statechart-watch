declare module '*.svg' {
  const content: any;

  export default content;
  export const ReactComponent: any;
}

declare module '*.png' {
  const content: string;

  export default content;
}
