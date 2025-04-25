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
import { labels } from '../../common/consts/labels';
import DuplicatesCounter from '../duplicates-counter/duplicates-counter';

interface Props {
  data: IData_SnippetNews;
}

const titleStyle: React.CSSProperties = {
  color: 'inherit',
};
//TODO: move color to consts
const srcBtnStyle: React.CSSProperties = {
  borderColor: 'transparent',
  boxShadow: 'none',
  color: '#1668dc',
  borderRadius: '10px',
};

const showMoreStyle: React.CSSProperties = {
  padding: '2px',
};

const viewBtnStyle: React.CSSProperties = {
  padding: '18px',
  fontSize: '16px',
};

const relevanceBtnStyle: React.CSSProperties = {};

const News: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.NewsContainer}>
      <Flex vertical>
        <div className={styles.TrafficWrapper}>
          <Traffic date={data.DP} reach={data.REACH} traffic={data.TRAFFIC} />
          <Reactions />
        </div>
        <Link href={data.URL}>
          <Title level={3} style={titleStyle}>
            {data.TI}
          </Title>
        </Link>
        <Info
          dom={data.DOM}
          country={data.CNTR}
          lang={data.LANG}
          authors={data.AU}
        ></Info>
      </Flex>
      <Flex vertical>
        <div>
          <Highlights highlights={data.HIGHLIGHTS} />
        </div>
        <div>
          <Button
            color='blue'
            variant='text'
            iconPosition='end'
            icon={<CaretDownOutlined />}
            style={showMoreStyle}
          >
            {labels.SHOW_MORE.buttonText}
          </Button>
        </div>
      </Flex>
      <Tags tags={data.KW} />
      <Flex>
        <Button style={srcBtnStyle}>
          <Link href={data.URL}>{labels.SOURCE.buttonText}</Link>
        </Button>
      </Flex>
      <Flex justify='space-between' align='center'>
        <DuplicatesCounter duplicates={data.KW} />
        <Button
          color='blue'
          variant='text'
          iconPosition='end'
          icon={<CaretDownOutlined />}
        >
          By Relevance
        </Button>
      </Flex>
      <div>Duplicate</div>
      <Button
        variant='outlined'
        style={viewBtnStyle}
        icon={<CaretDownOutlined />}
      >
        View Duplicates
      </Button>
    </div>
  );
};

export default News;
