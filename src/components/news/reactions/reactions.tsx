import React from 'react';
import { BorderOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Button } from 'antd';
import { labels } from '../../../common/consts/labels';

interface Props {
  isBtn?: boolean;
}

const Reactions: React.FC<Props> = ({ isBtn = true }) => {
  return (
    <Flex gap='middle'>
      {isBtn && (
        <Button color='green' variant='solid'>
          {labels.REACTIONS.BUTTON.text}
        </Button>
      )}
      <InfoCircleOutlined />
      <BorderOutlined />
    </Flex>
  );
};

export default Reactions;
