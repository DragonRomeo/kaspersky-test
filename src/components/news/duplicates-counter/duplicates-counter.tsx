import React from 'react';

import { Flex } from 'antd';
import { Typography } from 'antd';

import { getTotalCount, notFoundMessage } from './duplicates.helper';
import { containerStyles } from './duplicates.style';
import { IData_TagItem } from '../../../common/interfaces/snippet-news';
import { labels } from '../../../common/consts/labels';

const { Text } = Typography;

interface Props {
  duplicates: IData_TagItem[];
}

const DuplicatesCounter: React.FC<Props> = ({ duplicates }) => {
  const count = getTotalCount(duplicates);
  const result = count !== null ? count : notFoundMessage;

  return (
    <Flex gap='5px'>
      <Text type='secondary' style={containerStyles}>
        {labels.DUPLICATES.text}{' '}
      </Text>
      <Text style={containerStyles}>{result}</Text>
    </Flex>
  );
};

export default DuplicatesCounter;
