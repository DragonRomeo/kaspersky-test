import React from 'react';
import { BorderOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Button } from 'antd';
import { capitalize } from '../../../common/helpers/global-helpers';
import { btnStyle, colors } from './reactions.style';

interface Props {
  isBtn?: boolean;
  sentiment: string;
}

const Reactions: React.FC<Props> = ({ isBtn = true, sentiment }) => {
  const currentColor = colors[sentiment];
  return (
    <Flex gap='middle'>
      {isBtn && (
        <Button style={btnStyle} color={currentColor} variant='solid'>
          {capitalize(sentiment)}
        </Button>
      )}
      <InfoCircleOutlined />
      <BorderOutlined />
    </Flex>
  );
};

export default Reactions;
