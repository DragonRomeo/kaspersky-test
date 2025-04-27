import React from 'react';
import { IData_SnippetNews } from '../../../common/interfaces/snippet-news';
import { duplicatesContainerStyle } from './duplicates.style';
import { Flex, Space } from 'antd';
import TrafficItem from '../traffic/traffic-item/traffic-item';
import { getDateArr, getThousandths } from '../traffic/traffic.helpers';
import TitleLink from '../title-info/title-link/title-link';
import Info from '../info/info';
import Reactions from '../reactions/reactions';
import { mockDuplicateURL } from './duplicates.consts';

interface Props {
  data: IData_SnippetNews;
}

const Duplicates: React.FC<Props> = ({ data }) => {
  const date = data.DP;
  const reach = data.REACH;
  const dateArr = getDateArr(date);
  return (
    <div style={duplicatesContainerStyle}>
      <Flex justify='space-between' align='center'>
        <Flex vertical>
          <Space direction='horizontal' size='large'>
            <TrafficItem
              firstValue={dateArr[1]}
              isHighlightFirst={false}
              secondValue={`${dateArr[0]} ${dateArr[2]}`}
            />
            <TrafficItem
              firstValue={getThousandths(reach)}
              secondValue='Top Reach'
              isHighlightSecond={true}
            />
          </Space>
        </Flex>
        <Reactions sentiment={data.SENT} isBtn={false} />
      </Flex>
      <TitleLink url={data.URL}>{data.TI}</TitleLink>
      <Info
        countryCode={data.CNTR_CODE}
        dom={mockDuplicateURL}
        country={data.CNTR}
        authors={data.AU}
      ></Info>
    </div>
  );
};

export default Duplicates;
