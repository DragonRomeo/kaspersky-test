import React from 'react';
import { IData_SnippetNews } from '../../common/interfaces/snippet-news';
import styles from './news.module.scss';
import Traffic from './traffic/traffic';
import Reactions from './reactions/reactions';
import Title from 'antd/es/typography/Title';
import Info from './info/info';
import { Button, Flex } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import Tags from './tags/tags';
import Link from 'antd/es/typography/Link';
import Highlights from './highlights/highlights';

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
      {/* TODO: ADD LINK HERE */}
      <Title level={3}>{data.TI}</Title>
      <Info
        dom={data.DOM}
        country={data.CNTR}
        lang={data.LANG}
        authors={data.AU}
      ></Info>
      <div>
        <Highlights highlights={data.HIGHLIGHTS} />
      </div>
      {/*TODO: Move to label */}
      <div>
        <Button
          color='blue'
          variant='text'
          iconPosition='end'
          icon={<CaretDownOutlined />}
        >
          Show more
        </Button>
      </div>
      {/* <div>tag buttons - "tag" in ant</div> */}
      <Tags tags={data.KW} />
      {/* <div>source btn (link)</div> */}
      <Flex>
        <Button>
          <Link href={data.URL}>Original Source</Link>
        </Button>
      </Flex>
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
