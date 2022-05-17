export const clearCss = (cssIn: string) => {
  const cssInTrim = cssIn.trim();
  const cssOut = cssInTrim.replace(/\s+/g, ' ');
  return cssOut;
};
