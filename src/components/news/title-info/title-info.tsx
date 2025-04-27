import { Flex } from 'antd';
import React from 'react';
import { IData_SnippetNews } from '../../../common/interfaces/snippet-news';
import { titleStyle, trafficWrapper } from './title-info.style';
import Traffic from '../traffic/traffic';
import Reactions from '../reactions/reactions';
import Link from 'antd/es/typography/Link';
import Title from 'antd/es/typography/Title';
import Info from '../info/info';

interface Props {
  data: IData_SnippetNews;
}

const TitleInfo: React.FC<Props> = ({ data }) => {
  return (
    <Flex vertical>
      <div style={trafficWrapper}>
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
  );
};

export default TitleInfo;
