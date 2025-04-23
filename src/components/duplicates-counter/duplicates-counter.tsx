import React from 'react';
import { IData_TagItem } from '../../common/interfaces/snippet-news';
import { Flex } from 'antd';
import { Typography } from 'antd';
import { labels } from '../../common/consts/labels';
import { getTotalCount, notFoundMessage } from './duplicates.helper';

const { Text } = Typography;

interface Props {
  duplicates: IData_TagItem[];
}

const DuplicatesCounter: React.FC<Props> = ({ duplicates }) => {
  const count = getTotalCount(duplicates);
  const result = count !== null ? count : notFoundMessage;

  return (
    <Flex gap='5px'>
      <Text type='secondary'>{labels.DUPLICATES.text} </Text>
      <Text>{result}</Text>
    </Flex>
  );
};

export default DuplicatesCounter;
