import Link from 'antd/es/typography/Link';
import React from 'react';
import Title from 'antd/es/typography/Title';
import { titleStyle } from './title-link.style';

interface Props {
  url: string;
  children: string;
}

const TitleLink: React.FC<Props> = ({ url, children }) => {
  return (
    <Link href={url}>
      <Title level={3} style={titleStyle}>
        {children}
      </Title>
    </Link>
  );
};

export default TitleLink;
