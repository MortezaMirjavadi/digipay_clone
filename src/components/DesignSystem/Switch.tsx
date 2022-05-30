import React from 'react';
import {useState, useRef} from 'react';
import styled from 'styled-components/macro';
import {number} from "prop-types";

interface StyleProps {
  right: number
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 24px;
  padding: 0;
  border: 0;
`;
const Label = styled.span`
  font-size: 0.8571428571rem;
  color: #6e798d;
  flex: 0 1 auto;
  margin-left: 24px;
`;
const SwitchContainer = styled.div`
  flex: 1 1 auto;
  direction: rtl;
  position: relative;
  background: #f2f5f8;
  border-radius: 12px;
  color: #6e798d;
  padding: 0 2px;
  height: 100%;
  margin: 0;
  border: 0;
`;
const UnorderList = styled.ul`
  display: flex;
  justify-content: stretch;
  height: 100%;
  position: relative;
  list-style: none;
`;
const ListItem = styled.li`
  width: 50%;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  text-align: center;
  z-index: 1;
  font-weight: 500;
  color: ${props => props.color};
`;
const Highlight = styled.li<StyleProps>`
  right: ${props => props.right}px;
  background-color: rgb(240, 245, 255);
  width: 50%;
  height: 30px;
  position: absolute;
  border: 2px solid rgb(0, 64, 255);
  top: 2px;
  left: 0;
  border-radius: 8px;
  z-index: 0;
  transition: right 0.6s cubic-bezier(0.02, 0.94, 0.09, 0.97),
    background 0.3s cubic-bezier(0.17, 0.67, 0.14, 1.03);
  box-sizing: border-box;
`;

export default function () {
  const [selected, setSelected] = useState(0);
  const ref = useRef(null);

  function handleSelect(id: number) {
    setSelected(id);
  }

  function handleRight(): number {
    if (selected === 0) return 0;
    // @ts-ignore
    return ref.current.offsetWidth + 1;
  }

  return (
    <MainContainer>
      <Label>نوع سیم‌کارت:</Label>
      <SwitchContainer>
        <UnorderList>
          <ListItem
            onClick={() => handleSelect(0)}
            color={selected === 0 ? '#0040ff' : '#6e798d'}
          >
            اعتباری
          </ListItem>
          <ListItem
            ref={ref}
            onClick={() => handleSelect(1)}
            color={selected === 1 ? '#0040ff' : '#6e798d'}
          >
            دائمی
          </ListItem>
          <Highlight right={handleRight()} />
        </UnorderList>
      </SwitchContainer>
    </MainContainer>
  );
}
