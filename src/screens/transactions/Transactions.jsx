import styled from 'styled-components/macro';
import ReceivedIcon from '@assets/icons/received.svg';
import PaidIcon from '@assets/icons/paid.svg';
import GeneralDate from '@assets/icons/icon-general-date.svg';
import GeneralDateHightlight from '@assets/icons/icon-general-date-h.svg';
import TransactionGroup from './TransactionGroup';

const componentName = 'Transactions';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
`;
const Section = styled.div`
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
`;
const Body = styled.div`
  width: 50%;
  height: 71vh;
  overflow: hidden;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dee3e7;
  padding: 16px 0 0;
  flex-grow: 0;
`;
const TitleLeft = styled.div`
  padding-left: 24px;
  flex: 0 1 42.7%;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;
const TitleRight = styled.div`
  padding-right: 24px;
  flex: 0 1 48.7%;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.2857142857rem;
  font-weight: 400;
  color: #6e798d;
`;
const TitleIcon = styled.span`
  width: 30px;
  height: 30px;
  background: url(${ReceivedIcon}) no-repeat 0 0/100%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
`;
const DesktopCollumn = styled.div`
  justify-content: space-between;
  display: flex;
  height: 71vh;
  flex-grow: 1;
  overflow: hidden;
`;
const DateIcon = styled.span`
  margin-left: 24px;
  cursor: pointer;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(${GeneralDate}) no-repeat 0 0/100%;
  &:hover {
    background: url(${GeneralDateHightlight}) no-repeat 0 0/100%;
  }
`;
const TransactionList = styled.div`
  flex: 0 1 48.7%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;
const ScrollArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 8px;
`;
const Scrollable = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
const ScrollContent = styled.div`
  display: inline-block;
  min-width: 100%;
  position: relative !important;
`;
const DesktopColumnSeparator = styled.div`
  width: 1px;
  height: 100%;
  background: #dee3e7;
`;

const Transactions = () => {
  return (
    <Container>
      <Section>
        <TitleBar>
          <TitleRight>
            <Title>
              <TitleIcon></TitleIcon>
              پرداخت
            </Title>
          </TitleRight>
          <TitleLeft>
            <Title>
              <TitleIcon></TitleIcon>
              دریافت
            </Title>
          </TitleLeft>
          <DateIcon />
        </TitleBar>
        <DesktopCollumn>
          <Body>
            <TransactionList>
              <ScrollArea>
                <Scrollable>
                  <ScrollContent>
                    <TransactionGroup />
                    <TransactionGroup />
                  </ScrollContent>
                </Scrollable>
              </ScrollArea>
            </TransactionList>
          </Body>
          <DesktopColumnSeparator />
          <Body>
            <TransactionList>
              <ScrollArea>
                <Scrollable>
                  <ScrollContent>
                    <TransactionGroup />
                    <TransactionGroup />
                  </ScrollContent>
                </Scrollable>
              </ScrollArea>
            </TransactionList>
          </Body>
        </DesktopCollumn>
      </Section>
    </Container>
  );
};

// Transactions.displayName = componentName;

export default Transactions;
