import { IData_TagItem } from '../../common/interfaces/snippet-news';

export const getTotalCount = (duplicates: IData_TagItem[]): number | null => {
  if (duplicates.length === 0) {
    return null;
  }
  const result = duplicates.reduce((acc, current) => acc + current.count, 0);
  return result;
};

export const notFoundMessage = 'is not found';
