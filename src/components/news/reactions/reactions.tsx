import React from 'react';
import { BorderOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Button } from 'antd';

// const ButtonStyled = styled(Button)`
//     background-color: red;
// `;

const Reactions = () => {
  return (
    <Flex gap='middle'>
      {/* Move to labels */}
      <Button color='green' variant='solid'>
        Positive
      </Button>
      <InfoCircleOutlined />
      <BorderOutlined />
    </Flex>
  );
};

export default Reactions;
