import React from 'react';
import { IData_SnippetNews } from '../../../common/interfaces/snippet-news';
import { duplicatesContainerStyle } from './duplicates.style';

interface Props {
  data: IData_SnippetNews;
}

const Duplicates: React.FC<Props> = ({ data }) => {
  return <div style={duplicatesContainerStyle}>Duplicates</div>;
};

export default Duplicates;
