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
import { countryFlags } from './info.consts';

interface Props {
  dom: string;
  country: string;
  countryCode: string;
  lang?: string;
  authors: Array<string>;
}

const Info: React.FC<Props> = ({
  dom,
  country,
  lang,
  authors,
  countryCode,
}) => {
  const newAuthors = authors.length ? getAuthorsStr(authors) : authorEmpty;
  const currentFlag = countryFlags[countryCode];
  return (
    <Flex gap='middle'>
      <Flex gap='small'>
        <GlobalOutlined />
        <Link href={dom} target='_blank'>
          {capitalize(dom)}
        </Link>
      </Flex>
      <InfoItem icon={currentFlag} text={country} />
      {lang && (
        <InfoItem icon={<FontColorsOutlined />} text={capitalize(lang)} />
      )}
      <InfoItem icon={<UserOutlined />} text={newAuthors} />
    </Flex>
  );
};

export default Info;
