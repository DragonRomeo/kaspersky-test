import React from 'react';
import { Flex } from 'antd';
import { IData_TrafficItem } from '../../../common/interfaces/snippet-news';
import { Typography, Space } from 'antd';
import { getDateArr, getPercent, getThousandths } from './traffic.helpers';
import { labels } from '../../../common/consts/labels';

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
      <Flex gap='small'>
        <Text>{dateArr[1]}</Text>
        <Text type='secondary'>{`${dateArr[0]} ${dateArr[2]}`}</Text>
      </Flex>
      <Flex gap='small'>
        <Text>{getThousandths(reach)}</Text>

        <Text type='secondary'>{labels.TRAFFIC.reach}</Text>
      </Flex>
      <Flex gap='small'>
        <Text type='secondary'>{labels.TRAFFIC.traffic}</Text>
        <Flex gap='small'>
          {traffic.map((country) => (
            <Flex key={country.value} gap='2px'>
              <Text type='secondary'>{country.value}</Text>
              <Text>{getPercent(country.count)}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Space>
  );
};

export default Traffic;
