import React from 'react';
import { IData_SnippetNews } from '../../common/interfaces/snippet-news';
import styles from './news.module.scss';
import { Button, Flex } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import Tags from './tags/tags';
import Link from 'antd/es/typography/Link';
import Highlights from './highlights/highlights';
import { labels } from '../../common/consts/labels';
import { showMoreStyle, srcBtnStyle, viewBtnStyle } from './news.style';
import DuplicatesCounter from './duplicates-counter/duplicates-counter';
import Duplicates from './duplicates/duplicates';
import TitleInfo from './title-info/title-info';

interface Props {
  data: IData_SnippetNews;
}

const News: React.FC<Props> = ({ data }) => {
  return (
    // TODO: заменить scss на ts
    <div className={styles.NewsContainer}>
      <TitleInfo data={data} />
      {/* TODO: вынести в хайлайт контейнер? */}
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
          {labels.SORTING.text}
        </Button>
      </Flex>
      <Duplicates data={data} />
      <Button
        variant='outlined'
        style={viewBtnStyle}
        icon={<CaretDownOutlined />}
      >
        {labels.VIEW_DUPLICATES.text}
      </Button>
    </div>
  );
};

export default News;
