import { capitalize } from "../../../common/helpers/global-helpers";

export const processingSentences = (highlights: string[]) => {
  const result: string[] = [];
  const endSymbol = ';';

  highlights.forEach((highlight, index) => {
    if (index === 0) {
      const newStr = highlight + endSymbol;
      result.push(newStr);
    } else if (index === highlights.length - 1) {
      const sliced = highlight.slice(1);
      const newStr = capitalize(sliced);
      result.push(newStr);
    } else {
      const sliced = highlight.slice(1);
      const newStr = capitalize(sliced) + endSymbol;
      result.push(newStr);
    }
  });
  return result;
};
