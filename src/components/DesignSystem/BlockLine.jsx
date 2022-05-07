import styled from 'styled-components/macro';

const Container = styled.div`
  display: block;
  margin: 24px 0;
`;
const Block = styled.div`
  height: 6px;
  width: 100%;
  background-color: #f2f5f8;
`;

const BlockLine = () => {
  return (
    <Container>
      <Block />
    </Container>
  );
};

export default BlockLine;
