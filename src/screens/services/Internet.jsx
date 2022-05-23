import styled from 'styled-components/macro';
import {useNavigate} from 'react-router-dom';
import WarningIcon from '@assets/icons/warning-icon.svg';
import {
  SimcardSelector,
  BlockLine,
  CarrierSelect,
  Input,
  Button,
} from '@components/DesignSystem';

const Section = styled.div`
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
  flex: 0 0 auto;
  width: 560px;
  margin-left: 24px;
`;
const Container = styled.div`
  padding: 24px;
`;
const Header = styled.div`
  font-size: 1.7142857143rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  user-select: none;
`;
const Warning = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  background: url(${WarningIcon}) no-repeat 0 0/100%;
  marginbottom: 20px;
`;
const Paragraph = styled.p`
  color: #666;
  font-size: 0.8571428571rem;
  line-height: 1.6666666667em;
`;
const Body = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
const ButtonInnerContainer = styled.div`
  min-width: 130px;
`;

const simcards = [
  {id: 1, title: 'دائمی'},
  {id: 2, title: 'اعتباری'},
  {id: 3, title: 'دیتا'},
];

const Internet = () => {
  const navigate = useNavigate();

  function gotoPath(path) {
    navigate(path);
  }

  return (
    <Section>
      <Container>
        <Header>
          <Paragraph>
            <Warning />
            در صورتی که ترابرد کرده‌اید اپراتور خود را تغییر دهید.
          </Paragraph>
        </Header>
        <Body>
          <Input />
          <CarrierSelect />
        </Body>
        <BlockLine />
        <SimcardSelector
          description="نوع سیم‌کارت خود را انتخاب کنید."
          simcards={simcards}
        />
        <ButtonContainer>
          <ButtonInnerContainer>
            <Button
              label="ادامه"
              size="large"
              onClick={() => gotoPath('/service/internet/package')}
            />
          </ButtonInnerContainer>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default Internet;
