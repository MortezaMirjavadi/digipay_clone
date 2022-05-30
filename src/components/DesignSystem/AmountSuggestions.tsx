import React from 'react';
import {useState} from 'react';
import styled from 'styled-components/macro';
import {numberWithCommas} from '../../utils/utils';

interface StyleProps {
  selected: boolean
}

const Container = styled.div`
  margin: 20px;
  display: block;
`;
const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -6px;
  padding: 0;
  border: 0;
`;
const SuggestionWrapper = styled.div`
  flex: 0 1 33.33%;
  padding: 0 6px;
`;
const Suggest = styled.div<StyleProps>`
  box-shadow: ${props =>
    props.selected ? '0 0 0 2px #0040ff' : '0 0 0 1px #666'};
  background-color: ${props => props.selected && '#f0f5ff'};
  color: ${props => props.selected && '#0040ff'};

  text-align: center;
  font-size: 0.8571428571rem;
  padding: 0.6666666667em 1.6666666667em;
  width: 100%;
  border-radius: 8px;
  ${'' /* box-shadow: 0 0 0 1px #666; */}
  cursor: pointer;
  margin: 0 0 12px;
  white-space: nowrap;
`;
const SuggestionValues = [
  {id: 1, value: 20000},
  {id: 2, value: 50000},
  {id: 3, value: 100000},
  {id: 4, value: 200000},
];

export default function () {
  const [suggestions, setSuggestions] = useState(
    SuggestionValues.map((suggestion, index) => ({
      ...suggestion,
      selected: index === 0,
    })),
  );

  function handleClick(id: number) {
    const _suggestions = [...suggestions];
    _suggestions.forEach(suggestion => {
      suggestion.selected = suggestion.id === id;
    });
    setSuggestions(_suggestions);
  }

  return (
    <Container>
      <Suggestions>
        {suggestions.map(({id, value, selected}) => (
          <SuggestionWrapper key={id}>
            <Suggest selected={selected} onClick={() => handleClick(id)}>
              {numberWithCommas(value.toString())} ریال
            </Suggest>
          </SuggestionWrapper>
        ))}
      </Suggestions>
    </Container>
  );
}
