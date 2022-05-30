import {useState} from 'react';
import styled from 'styled-components/macro';
import SimcardSelectedIcon from '@assets/icons/sim-card-selected.svg';
import SimcardIcon from '@assets/icons/sim-card.svg';
import SimcardChecked from '@assets/icons/sim-card-checked.svg';
import React from 'react';

interface Props {
    description: string,
    simcards:  { id: number, title: string }[]
}

interface StyleProps {
    isSelected: boolean
}

const Container = styled.div`
  display: block;
  margin: 24px 0;
`;
const Header = styled.div`
  color: #6e798d;
  font-size: 0.8571428571rem;
  margin-bottom: 1.3333333333em;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 25%;
  text-align: center;
`;
const Simcard = styled.div`
  width: 96px;
  display: block;
  height: 64px;
`;
const SimcardItem = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${props =>
      props.isSelected ? `url(${SimcardSelectedIcon})` : `url(${SimcardIcon})`}
    no-repeat 0 0/100% 100%;
  color: ${props => (props.isSelected ? '#0040ff' : '#6e798d')};
  font-weight: 500;
  font-size: 0.8571428571rem;
  padding: 12px;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  text-align: right;
`;
const CheckboxCircle = styled.span<StyleProps>`
  background: ${props =>
    props.isSelected
      ? `url(${SimcardChecked}) no-repeat 0 0/100% 100%`
      : '#fff'};
  width: 16px;
  height: 16px;
  border: ${props => (props.isSelected ? 'none' : '1px solid #dee3e7')};
  border-radius: 50%;
  margin-bottom: 10px;
`;
const Title = styled.span`
  font-size: 0.8571428571rem;
`;

const SimcardSelector = ({description, simcards}: Props) => {
  const [selectedSimcard, setSelectedSimcard] = useState(1);

  function handleSelectSimcard(id: number) {
    setSelectedSimcard(id);
  }

  return (
    <Container>
      <Header>{description}</Header>
      <CardsContainer>
        {simcards.map(({id, title}) => (
          <Card key={id}>
            <Simcard>
              <SimcardItem
                isSelected={id === selectedSimcard}
                onClick={() => handleSelectSimcard(id)}
              >
                <CheckboxCircle isSelected={id === selectedSimcard} />
                <Title>{title}</Title>
              </SimcardItem>
            </Simcard>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default SimcardSelector;
