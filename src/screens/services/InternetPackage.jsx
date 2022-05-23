import styled from 'styled-components/macro';
import WarningIcon from '@assets/icons/warning-icon.svg';
import {
  Button,
  Input,
  BlockLine,
  SimpleMasonry,
} from '@components/DesignSystem';

const Container = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
  padding: 24px;
`;
const Paragraph = styled.p`
  color: #666;
  font-size: 0.8571428571rem;
  line-height: 1.6666666667em;
`;
const Warning = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  background: url(${WarningIcon}) no-repeat 0 0/100%;
  marginbottom: 20px;
  margin-left: 10px;
`;
const Filter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const NumberField = styled.div`
  flex: 0 1 30%;
  margin-left: 16px;
`;
const SelectField = styled.div`
  flex: 0 1 20%;
  margin-left: 16px;
`;
const ButtonContainer = styled.div`
  flex: 0 1 30%;
  margin-left: 0;
`;

const InternetPackage = () => {
  return (
    <Container>
      <Paragraph>
        <Warning />
        در صورتی که ترابرد کرده‌اید اپراتور خود را تغییر دهید.
      </Paragraph>
      <Filter>
        <NumberField>
          <Input />
        </NumberField>
        <SelectField></SelectField>
        <ButtonContainer>
          <Button label="جستجو" size="large"></Button>
        </ButtonContainer>
      </Filter>
      <BlockLine height={1} color="#e6e6e6" />
      <SimpleMasonry></SimpleMasonry>
    </Container>
  );
};

export default InternetPackage;
