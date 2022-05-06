import {useState, forwardRef} from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  font-size: 8px;
  width: 5em;
  height: 3em;
  padding: 0.5em;
  border-radius: 2em;
  direction: rtl;
  background: ${props => (props.isChecked ? '#0040ff' : '#b4bdc7')};
  cursor: pointer;
  transition: background-color 0.2s;
`;
const Circle = styled.div`
  margin-right: ${props => (props.isChecked && '2em') || 0};
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: #fff;
  display: inline-block;
  transition: margin-right 0.2s;
`;

const SwitchItem = forwardRef((props, ref) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container
      onClick={() => setIsChecked(prev => !prev)}
      isChecked={isChecked}
    >
      <Circle isChecked={isChecked} />
    </Container>
  );
});

export default SwitchItem;
