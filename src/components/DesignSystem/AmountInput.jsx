import {useState, forwardRef} from 'react';
import styled from 'styled-components/macro';
import {numberWithCommas, numberWithoutCommas} from '../../utils/utils';

const InputContainer = styled.div`
  margin: 22px;
  display: block;
`;
const Label = styled.div`
  height: 56px;
  border-radius: 16px;
  border: 1px solid ${props => (props.type === 'error' ? '#ff2638' : '#191919')};
  display: flex;
  align-items: center;
  justify-content: center;
  direction: ltr;
  margin: 0;
  padding: 0;
`;
const Unit = styled.span`
  font-size: 1.2857142857rem;
  font-weight: 300;
`;
const Input = styled.input`
  ::placeholder,
  ::-webkit-input-placeholder {
    min-width: 100px;
    font-size: 1.2857142857rem;
    font-weight: 300;
  }
  :-ms-input-placeholder {
    min-width: 100px;
    font-size: 1.2857142857rem;
    font-weight: 300;
  }
  &:focus {
    box-shadow: none;
    outline: none;
  }
  height: 100%;
  border: none;
  padding: 0;
  min-width: 10px;
  font-size: 2.2857142857rem;
  font-weight: 400;
  margin-left: 10px;
  text-align: left;
  direction: ltr;
  box-shadow: none;
`;
const Hint = styled.div`
  color: ${props => (props.type === 'hint' ? '#0040ff' : '#ff2638')};
  font-size: 0.8571428571rem;
  line-height: 1.6666666667em;
  padding: 0.5em 0 0;
`;

const AmountInput = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const [width, setWidth] = useState(88);
  const [error, setError] = useState('');

  function handleChange(e) {
    const raw = numberWithoutCommas(e.target.value);
    const number = Number(numberWithoutCommas(e.target.value));
    const temp = numberWithCommas(numberWithoutCommas(e.target.value));
    setValue(temp);
    if (temp.length > 0) {
      setWidth(temp.length * 20);
    } else {
      setWidth(88);
    }
    if (raw.length > 0 && (number < 20000 || number > 500000)) {
      setError('مقدار وارد شده می بایست بین 20000 تا 500000 ریال باشد.');
    } else {
      setError('');
    }
  }

  return (
    <InputContainer>
      <Label type={error.length > 0 ? 'error' : ''}>
        <Unit>(ریال)</Unit>
        <Input
          style={{width: `${width}px`}}
          value={value}
          onChange={handleChange}
          type="tel"
          pattern="[0-9]*"
          maxLength={9}
          placeholder="مبلغ دلخواه"
          step={1000}
        />
      </Label>
      <Hint type={error.length > 0 ? 'error' : ''}>{error}</Hint>
    </InputContainer>
  );
});

export default AmountInput;
