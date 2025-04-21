import React from 'react';
import { IData_SnippetNews } from '../../common/interfaces/snippet-news';
import styles from './news.module.scss';
import Traffic from './traffic/traffic';
import Reactions from './reactions/reactions';

interface Props {
  data: IData_SnippetNews;
}

const News: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.NewsContainer}>
      <div className={styles.TrafficWrapper}>
        <Traffic date={data.DP} reach={data.REACH} traffic={data.TRAFFIC} />
        <Reactions />
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
