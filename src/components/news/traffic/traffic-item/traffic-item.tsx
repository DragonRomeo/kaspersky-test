import { Flex } from 'antd';
import React from 'react';
import { Typography } from 'antd';
import { defaultColor, highlightColor } from './traffic-item.consts';

const { Text } = Typography;

interface Props {
  firstValue: string;
  isHighlightFirst?: boolean;
  secondValue: string;
  isHighlightSecond?: boolean;
}

const TrafficItem: React.FC<Props> = ({
  firstValue,
  isHighlightFirst = true,
  secondValue,
  isHighlightSecond = false,
}) => {
  const firstType = isHighlightFirst ? highlightColor : defaultColor;
  const secondType = isHighlightSecond ? highlightColor : defaultColor;

  return (
    <Flex gap='4px'>
      <Text type={firstType}>{firstValue}</Text>
      <Text type={secondType}>{secondValue}</Text>
    </Flex>
  );
};

export default TrafficItem;
