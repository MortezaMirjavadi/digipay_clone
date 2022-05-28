import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: block;
  margin: 24px 0;
`;
const Hr = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e6e6e6;
`;

export default function Line() {
  return (
    <Container>
      <Hr />
    </Container>
  );
}
