import { Flex } from 'antd';
import React, { ReactNode } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface Props {
  icon?: ReactNode;
  text: string;
}

const InfoItem: React.FC<Props> = ({ icon, text }) => {
  return (
    <Flex gap='small'>
      {icon}
      <Text type='secondary'>{text}</Text>
    </Flex>
  );
};

export default InfoItem;
