import { Flex } from 'antd';
import React from 'react';
import { IData_SnippetNews } from '../../../common/interfaces/snippet-news';
import { trafficWrapper } from './title-info.style';
import Traffic from '../traffic/traffic';
import Reactions from '../reactions/reactions';
import Info from '../info/info';
import TitleLink from './title-link/title-link';

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
      <TitleLink url={data.URL}>{data.TI}</TitleLink>
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
