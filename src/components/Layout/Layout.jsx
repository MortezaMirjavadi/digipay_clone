import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '../AppBar/AppBar';
import HomeLayout from './HomeLayout';

const LayoutContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  width: 846px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function Layout(props) {
  const navigate = useNavigate();
  return (
    <LayoutContainer>
      <AppBar />
      <HomeLayout />
    </LayoutContainer>
  );
}
