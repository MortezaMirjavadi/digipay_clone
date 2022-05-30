import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components/macro';
import HomeCard from '../../components/HomeCard/HomeCard';
import Services from '../services/Services';
import Charge from '../services/Charge';
import React from 'react';

const Container = styled.div`
  display: flex;
`;
const Narrow = styled.div`
  margin-left: 88px;
  flex: 300px 0 0;
`;
const Wide = styled.div`
  flex: 1;
`;

export default function Home() {
  return (
    <Container>
      <Narrow>
        <HomeCard />
        <Services />
      </Narrow>
      <Wide>
        <Charge />
      </Wide>
    </Container>
  );
}
