import React from 'react';
import styled from 'styled-components/macro';

interface StyleProps {
  height: number,
  color: string
}

interface Props {
  height: number,
  color: string
}

const ComponentName = 'BlockLine';

const Container = styled.div`
  display: block;
  margin: 24px 0;
`;
const Block = styled.div<StyleProps>`
  height: ${props => props.height + 'px'};
  width: 100%;
  background-color: ${props => props.color};
`;

const BlockLine = ({height, color}: Props) => {
  return (
    <Container>
      <Block height={height} color={color} />
    </Container>
  );
};

BlockLine.displayName = ComponentName;
BlockLine.defaultProps = {
  height: 6,
  color: '#f2f5f8',
};

export default BlockLine;
