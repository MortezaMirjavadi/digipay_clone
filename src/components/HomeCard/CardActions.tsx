import styled from 'styled-components/macro';
import IncAmount from '../../assets/icons/inc-amount.png';
import DecAmount from '../../assets/icons/dec-amount.png';
import React from 'react';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-size: 12px;
`;
const Actions = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Action = styled.div`
  width: 24px;
  margin-left: 4px;
`;
const ImageIcon = styled.img`
  width: 24px;
  height: 24px;
  src: ${props => props.src};
  margin-left: 5px;
`;

export default function CardActions() {
  return (
    <Container>
      <Actions>
        <Actions>
          <ImageIcon src={IncAmount} />
          افزودن موجودی
        </Actions>
        <Actions>
          <ImageIcon src={DecAmount} />
          برداشت / انتقال
        </Actions>
      </Actions>
    </Container>
  );
}
