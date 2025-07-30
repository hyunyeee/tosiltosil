export const categoryKeys = {
  all: ["categories"] as const,

  lists: () => [...categoryKeys.all, "list"] as const,
  details: () => [...categoryKeys.all, "detail"] as const,
  detail: (categoryId: number) =>
    [...categoryKeys.details(), categoryId] as const,

  colorsPerDay: () => [...categoryKeys.all, "colors-per-day"] as const,
  colorsPerDayByDate: (year: number, month: number) =>
    [...categoryKeys.colorsPerDay(), { year, month }] as const,
};
