import styled from 'styled-components/macro';

const ComponentName = 'BlockLine';

const Container = styled.div`
  display: block;
  margin: 24px 0;
`;
const Block = styled.div`
  height: ${props => props.height + 'px'};
  width: 100%;
  background-color: ${props => props.color};
`;

const BlockLine = ({height, color}) => {
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
