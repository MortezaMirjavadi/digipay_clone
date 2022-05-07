import styled from 'styled-components/macro';
import FastCharge from '@assets/icons/FastCharge.svg';
import {
  CarrierSelect,
  Input,
  Switch,
  Line,
  AmountInput,
  AmountSuggestions,
  Button,
  SwitchItem,
} from '@components/DesignSystem';

const Container = styled.div`
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
`;
const Header = styled.div`
  border-bottom: 1px solid #e6e6e6;
  font-size: 1.7142857143rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  user-select: none;
  padding: 24px;
`;
const RocketIcon = styled.span`
  width: 32px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
  background: url(${FastCharge}) no-repeat 0 0/100%;
`;
const Body = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
`;
const Footer = styled.div`
  border-top: 1px solid #e6e6e6;
  display: flex;
  padding: 24px;
`;
const PayButton = styled.div`
  display: flex;
  width: 100%;
`;
const PayWithWalletButton = styled.div`
  width: 55%;
  margin-left: 16px;
`;
const SwitchBox = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  padding: 5px 16px;
  border: 1px solid #d3dbe1;
  background: #f5f8fa;
  border-radius: 16px;
`;
const AmazingChargeContainer = styled.div`
  flex-grow: 1;
`;
const AmazingChargeHeader = styled.h3`
  color: #666;
  font-size: 1rem;
  line-height: 1.7142857143em;
`;
const AmazingChargeDescription = styled.p`
  color: #b2b2b2;
  font-size: 0.8571428571rem;
  line-height: 1.6666666667em;
`;

export default function Charge() {
  return (
    <Container>
      <Header>
        <RocketIcon />
        خدمات شارژ سریع
      </Header>
      <Body>
        <Input />
        <CarrierSelect />
      </Body>
      <Switch />
      <Line />
      <AmountInput />
      <AmountSuggestions />
      <Line />
      <SwitchBox>
        <AmazingChargeContainer>
          <AmazingChargeHeader>شارژ شگفت انگیز</AmazingChargeHeader>
          <AmazingChargeDescription>
            تا ۲۵٪ هدیه شارژ بیشتر نسبت به مبلغ اصلی
          </AmazingChargeDescription>
        </AmazingChargeContainer>
        <SwitchItem />
      </SwitchBox>
      <Footer>
        <PayWithWalletButton>
          <Button label="پرداخت آنلاین" onClick={() => {}} />
        </PayWithWalletButton>
        <PayButton>
          <Button
            label="پرداخت با کیف پول"
            disabled={true}
            onClick={() => {}}
          />
        </PayButton>
      </Footer>
    </Container>
  );
}
