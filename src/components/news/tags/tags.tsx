import React from 'react';
import { Flex, Tag } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import { IData_TagItem } from '../../../common/interfaces/snippet-news';
import { Typography } from 'antd';

const { Text } = Typography;

// TODO: заменить на IData_TagItem[], чтоб соответсвовать стилю проекта?
interface Props {
  tags: Array<IData_TagItem>;
}

const tagStyle: React.CSSProperties = {
  display: 'flex',
  borderRadius: '20px',
  padding: '5px 15px',
  gap: '5px',
  color: 'rgba(255, 255, 255, 0.45)',
};

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <Flex gap='10px'>
      {tags &&
        tags.map((tag) => (
          <Tag
            key={tag.value}
            color='default'
            icon={<TwitterOutlined />}
            style={tagStyle}
          >
            {
              <Flex gap='5px'>
                <Text type='secondary'>{tag.value}</Text>
                <Text color='red'>{tag.count} </Text>
              </Flex>
            }
          </Tag>
        ))}
    </Flex>
  );
};

export default Tags;
