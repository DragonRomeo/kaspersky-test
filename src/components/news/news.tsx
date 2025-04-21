import React from 'react';
import { IData_SnippetNews } from '../../common/interfaces/snippet-news';
import styles from './news.module.scss';
import Traffic from './traffic/traffic';

interface Props {
  data: IData_SnippetNews;
}

const News: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.NewsContainer}>
      <div>
        {/*flex-row */}
        <Traffic date={data.DP} reach={data.REACH} traffic={data.TRAFFIC} />
        <div>Reactions? Positive btn</div>
      </div>
      <div>title</div>
      <div>info</div>
      <div>text</div>
      <div>tag buttons - "tag" in ant</div>
      <div>source btn (link)</div>
      <div>
        {/* flex-row */}
        <div>duplicates counter</div>
        <div>sorting</div>
      </div>
      <div>Duplicate</div>
      <div> View Duplicates btn</div>
    </div>
  );
};

export default News;
