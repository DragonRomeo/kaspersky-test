export const getDateArr = (date: string): Array<string> => {
  const newDate = new Date(date);
  const arr = newDate.toString().split(' ');
  const sliced = arr.slice(1, 4);

  return sliced;
};

export const getThousandths = (reach: number): string => {
  if (reach < 1000) {
    return reach.toString();
  }
  return `${Math.round(reach / 1000)}k`;
};

export const getPercent = (count: number): string => {
  return `${Math.round(count * 100)}%`;
};
