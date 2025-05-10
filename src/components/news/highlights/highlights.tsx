import Paragraph from 'antd/es/typography/Paragraph';
import React from 'react';
import { Typography } from 'antd';
import { openTag, separateSymbol } from './highlights.consts';
import { markStyle, paragraphStyle } from './highlights.style';
import { processingSentences } from './highlights.helpers';

const { Text } = Typography;

interface Props {
  highlights: string[];
}

const Highlights: React.FC<Props> = ({ highlights }) => {
  const newHighlights = processingSentences(highlights);
  const words: string[] = [];

  newHighlights.forEach((str) => {
    const itemArr = str.split(' ');
    words.push(...itemArr);
  });

  return (
    <Paragraph style={paragraphStyle}>
      {words.map((word) => {
        if (word.slice(0, 4) == openTag) {
          const indexOf = word.indexOf(separateSymbol);
          let firstHalf = '';
          let secondHalf = ' ';

          if (indexOf != -1) {
            firstHalf = word.slice(0, indexOf);
            secondHalf = word.slice(indexOf) + ' ';
          } else {
            firstHalf = word;
          }

          return (
            <>
              <Text style={markStyle}>
                {firstHalf.replace('<kw>', '').replace('</kw>', '')}
              </Text>
              {secondHalf}
            </>
          );
        }
        return `${word} `;
      })}
    </Paragraph>
  );
};

export default Highlights;
