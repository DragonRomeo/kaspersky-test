import React from 'react';
import { Flex } from 'antd';
import { IData_TrafficItem } from '../../../common/interfaces/snippet-news';
import { Typography, Space } from 'antd';
import { getDateArr, getPercent, getThousandths } from './traffic.helpers';
import { labels } from '../../../common/consts/labels';
import TrafficItem from './traffic-item/traffic-item';

const { Text } = Typography;

interface Props {
  date: string;
  reach: number;
  traffic: IData_TrafficItem[];
}
const Traffic: React.FC<Props> = ({ date, reach, traffic }) => {
  const dateArr = getDateArr(date);

  return (
    <Space direction='horizontal' size='large'>
      <TrafficItem
        firstValue={dateArr[1]}
        secondValue={`${dateArr[0]} ${dateArr[2]}`}
      />
      <TrafficItem
        firstValue={getThousandths(reach)}
        secondValue={labels.TRAFFIC.reach}
      />
      <Flex gap='small'>
        <Text type='secondary'>{labels.TRAFFIC.traffic}</Text>
        <Flex gap='small'>
          {traffic.map((country) => (
            <TrafficItem
              key={country.value}
              firstValue={country.value}
              isHighlightFirst={false}
              secondValue={getPercent(country.count)}
              isHighlightSecond={true}
            />
          ))}
        </Flex>
      </Flex>
    </Space>
  );
};

export default Traffic;
