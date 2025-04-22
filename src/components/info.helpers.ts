//Move to helpers
export const getAuthorsStr = (authors: Array<string>): string => {
  return authors.join('.,');
};

export const authorEmpty = 'The author is unknown';
