import {useState} from 'react';
import styled from 'styled-components/macro';
import MCI from '@assets/icons/mci.png';
import MTN from '@assets/icons/mtn.png';
import RIGHTEL from '@assets/icons/rightel.png';

const CarrierSelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CarrierSelected = styled.div`
  background: ${props => props.background};
  border: 1px solid ${props => props.border};
  border-radius: 12px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 4px;
`;
const Item = styled.span`
  background: url(${props => props.src}) no-repeat 0 0/100%;
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export default function CarrierSelect(props) {
  const [selected, setSelected] = useState(0);

  function handleSelect(id) {
    setSelected(id);
  }

  return (
    <CarrierSelectWrap>
      <CarrierSelected
        onClick={() => handleSelect(0)}
        background={selected === 0 ? 'azure' : '#fff'}
        border={selected === 0 ? '#00cfd5' : '#fff'}
      >
        <Item src={MCI} />
      </CarrierSelected>
      <CarrierSelected
        onClick={() => handleSelect(1)}
        background={selected === 1 ? '#fffcee' : '#fff'}
        border={selected === 1 ? '#ffd500' : '#fff'}
      >
        <Item src={MTN} />
      </CarrierSelected>
      <CarrierSelected
        onClick={() => handleSelect(2)}
        border={selected === 2 ? '#995af2' : '#fff'}
        background={selected === 2 ? '#f5eeff' : '#fff'}
      >
        <Item src={RIGHTEL} />
      </CarrierSelected>
    </CarrierSelectWrap>
  );
}
