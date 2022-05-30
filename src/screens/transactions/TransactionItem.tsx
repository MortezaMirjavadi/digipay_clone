import styled from 'styled-components/macro';
import MCI from '@assets/icons/mci.png';
import React from 'react';

interface Props {
  isLastItem: boolean
}

const TransactionItemContainer = styled.div<Props>`
  display: block;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 97%;
    border-bottom: ${prop => (prop.isLastItem ? '' : `1px solid #dee3e7`)};
  }
`;
const TransactionItemContent = styled.div`
  display: flex;
  padding: 10px 8px;
  align-items: center;
  cursor: pointer;
`;
const TransactionIcon = styled.span`
  width: 40px;
  height: 40px;
  background: url(${MCI}) no-repeat 0 0/100%;
`;
const TransactionBody = styled.div`
  margin: 0 8px;
  flex: 1 0;
`;
const TransactionBodyMainDesc = styled.h3`
  color: #4d4d4d;
`;
const TransactionBodySubDesc = styled.h5`
  font-size: 0.8571428571rem;
  font-weight: 200;
  color: #7f7f7f;
  margin: 8px 0 0;
`;
const TransactionAmount = styled.div`
  text-align: left;
  color: #0040ff;
  font-size: 1.1428571429rem;
  font-weight: 500;
`;
const TransactionAmountSign = styled.span`
  font-size: smaller;
  font-weight: 400;
  margin-right: 4px;
`;
const TransactionItem = ({isLastItem}: Props) => {
  return (
    <TransactionItemContainer isLastItem={isLastItem}>
      <TransactionItemContent>
        <TransactionIcon/>
        <TransactionBody>
          <TransactionBodyMainDesc>قبض همراه اول</TransactionBodyMainDesc>
          <TransactionBodySubDesc>پرداخت موفق</TransactionBodySubDesc>
        </TransactionBody>
        <TransactionAmount>
          <span>54٫000 ریال</span>
          <TransactionAmountSign>-</TransactionAmountSign>
        </TransactionAmount>
      </TransactionItemContent>
    </TransactionItemContainer>
  );
};

export default TransactionItem;
