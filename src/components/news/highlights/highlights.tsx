import Paragraph from 'antd/es/typography/Paragraph';
import React from 'react';
import { Typography } from 'antd';
import { openTag, startOrEndSymbol } from './highlights.consts';
import { markStyle, paragraphStyle } from './highlights.style';

const { Text } = Typography;

interface Props {
  highlights: string[];
}

const Highlights: React.FC<Props> = ({ highlights }) => {
  const arr: string[] = [];
  highlights.forEach((str) => {
    const itemArr = str.split(' ');
    arr.push(...itemArr);
  });

  return (
    <Paragraph style={paragraphStyle}>
      {arr.map((word, index) => {
        if (word.slice(0, 4) !== openTag) {
          return `${word} `;
        }
        let start = 4;
        let end = -5;
        if (index === 0 && word.slice(0, 1) === startOrEndSymbol) {
          start += 1;
        }
        if (word.slice(-1) === startOrEndSymbol) {
          end -= 1;
        }

        return (
          <>
            <Text style={markStyle}>{word.slice(start, end)}</Text>{' '}
          </>
        );
      })}
    </Paragraph>
  );
};

export default Highlights;
