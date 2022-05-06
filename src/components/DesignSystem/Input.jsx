import styled from 'styled-components/macro';

const InputWrap = styled.div`
  width: 100%;
  flex-grow: 1;
  margin-left: 12px;
`;
const InputWrapper = styled.input`
  border-radius: 16px;
  border: 1px solid #191919;
  width: 100%;
  height: 48px;
  color: #191919;
  font-size: 1.1428571429rem;
  padding: 0 14px;
  &:focus {
    box-shadow: none;
    outline: none;
    border-color: #0040ff;
  }
`;

export default function Input() {
  return (
    <InputWrap>
      <InputWrapper
        type="tel"
        maxLength={11}
        placeholder="شماره تلفن همراه"
        pattern='pattern="[0-9]*"'
      />
    </InputWrap>
  );
}
