import React from 'react';
import { BorderOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Button } from 'antd';
import { labels } from '../../../common/consts/labels';

const Reactions = () => {
  return (
    <Flex gap='middle'>
      <Button color='green' variant='solid'>
        {labels.REACTIONS.BUTTON.text}
      </Button>
      <InfoCircleOutlined />
      <BorderOutlined />
    </Flex>
  );
};

export default Reactions;
