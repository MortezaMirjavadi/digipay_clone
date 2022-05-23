import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import styled from 'styled-components/macro';
import Logo from '@assets/icons/digipay-log.svg';
import Exit from '@assets/icons/header-exit-blue.svg';
import Transaction from '@assets/icons/transaction-blue.svg';
import Button from '../DesignSystem/Button';
import ArrowIcon from '@assets/icons/arrow.svg';
import BackBlue from '@assets/icons/back-blue.svg';
import routes from '@routes';

const AppBarContainer = styled.div`
  padding: 16px 24px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-top: none;
  border-radius: 16px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
  min-height: 73px;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
`;
const DisplayLogo = styled.div`
  width: 77px;
  height: 40px;
  background: url(${Logo}) no-repeat center;
`;
const ReturnIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url(${ArrowIcon}) no-repeat center;
  transform: rotate(180deg);
  cursor: pointer;
  &:hover {
    background: url(${BackBlue}) no-repeat center;
  }
`;
const Item = styled.div`
  margin: 0 4px;
  width: 24px;
  height: 24px;
  display: inline-block;
  cursor: pointer;
`;
const ExitItem = styled(Item)`
  background: url(${Exit}) no-repeat center;
  &:hover {
    &:svg {
      &:g {
        &:g {
          fill: #red;
        }
      }
    }
  }
`;
const BreadCrumb = styled.div`
  display: flex;
  align-items: center;
`;
const BreadCrumbItem = styled.span`
  margin-right: 16px;
  font-weight: 400;
  font-size: 1rem;
`;

const TransactionItem = styled(Item)`
  background: url(${Transaction}) no-repeat center;
`;
export default function AppBar() {
  const [title, setTitle] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname === '/') {
      setTitle('');
      return;
    }
    const find = routes.find(({path}) => path === location.pathname);
    if (find) {
      setTitle(find.title);
    }
  }, [location]);

  function gotoRoot() {
    navigate('/');
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <AppBarContainer>
      <Actions>
        {/* <TransactionItem /> */}
        <Button label="ورود به حساب کاربری" size="medium" />
        <ExitItem />
      </Actions>
      <DisplayLogo onClick={gotoRoot} />
      {title.length > 0 && (
        <BreadCrumb>
          <ReturnIcon onClick={goBack} />
          <BreadCrumbItem>{title}</BreadCrumbItem>
        </BreadCrumb>
      )}
    </AppBarContainer>
  );
}
