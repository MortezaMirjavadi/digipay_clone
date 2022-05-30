import React from 'react';
import styled from 'styled-components/macro';
import TransactionItem from './TransactionItem';

const SectionItem = styled.section`
  margin-bottom: 12px;
  margin-top: 20px;
`;
const GroupTitle = styled.h4`
  margin-bottom: 8px;
  display: flex;
  padding: 0 8px;
  justify-content: space-between;
  color: #999;
  font-weight: 400;
  align-items: center;
`;
const GroupWrapper = styled.div`
  border: 1px solid #dee3e7;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const TransactionGroup = () => {
  return (
    <SectionItem>
      <GroupTitle>
        دیروز
        <span>1401/3/3</span>
      </GroupTitle>
      <GroupWrapper>
        {[1, 2, 3, 4].map((item, index) => (
          <TransactionItem key={item} isLastItem={index === 3} />
        ))}
      </GroupWrapper>
    </SectionItem>
  );
};

export default TransactionGroup;
