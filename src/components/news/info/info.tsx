import { Flex } from 'antd';
import Link from 'antd/es/typography/Link';
import React from 'react';
import InfoItem from './info-item/info-item';
import {
  FontColorsOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { authorEmpty, getAuthorsStr } from './info.helpers';
import { capitalize } from '../../../common/helpers/global-helpers';

interface Props {
  dom: string;
  country: string;
  lang?: string;
  authors: Array<string>;
}

const Info: React.FC<Props> = ({ dom, country, lang, authors }) => {
  const newAuthors = authors.length ? getAuthorsStr(authors) : authorEmpty;
  return (
    <Flex gap='middle'>
      <Flex gap='small'>
        <GlobalOutlined />
        <Link href={dom} target='_blank'>
          {capitalize(dom)}
        </Link>
      </Flex>
      {/* TODO: add icon for country */}
      <InfoItem text={country}></InfoItem>
      {lang && (
        <InfoItem icon={<FontColorsOutlined />} text={capitalize(lang)} />
      )}
      <InfoItem icon={<UserOutlined />} text={newAuthors}></InfoItem>
    </Flex>
  );
};

export default Info;
