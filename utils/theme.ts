export const getSubColor = (color: string): string => {
  return `var(--color-sub-${color})`;
};

export const getPrimaryColor = (color: string): string => {
  return `var(--color-primary-${color})`;
};
