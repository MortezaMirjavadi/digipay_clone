import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components/macro';
import Charge from '@assets/icons/charge.png';
import InternetPackage from '@assets/icons/InternetPackage.png';
import BillPay from '@assets/icons/BillPay.png';
import AghsatiService from '@assets/icons/AghsatiService.png';
import RoadTolls from '@assets/icons/RoadTolls.png';
import Traffic from '@assets/icons/traffic.png';

const Container = styled.div`
  margin: 20px 0 0;
  padding-top: 22px;
  border-top: 1px solid #e6e6e6;
`;
const Header = styled.h4`
  font-size: 1.2857142857rem;
  font-weight: 400;
  margin-bottom: 1.6666666667em;
`;
const ServiceGridContainer = styled.div`
  direction: rtl;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
`;
const IconGrid = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;
const ItemGrid = styled.div`
  width: 33.33%;
  margin-bottom: 16px;
  display: inline-block;
  text-align: center;
`;
const HomeServiceIcon = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(102, 102, 102);
  border-color: rgb(230, 230, 230);
  font-size: 80px;
  width: 1em;
  height: 1em;
  margin: 0 auto;
  border: 1px solid #d3dbe1;
  border-radius: 0.3em;
  background: #fff;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({disabled}) =>
    disabled &&
    `
    background-color: rgb(255, 255, 255);
    color: rgb(178, 178, 178);
    border-color: rgb(230, 230, 230);
  `}
`;
const Label = styled.span`
  display: inline-block;
  color: #666;
  font-size: 1rem;
  font-weight: 400;
  margin: 10px 0 0;
`;

export default function Services() {
  const navigate = useNavigate();

  function gotoPath(path) {
    navigate(path);
  }

  // useEffect(() => {
  //   document.title = 'لیست سرویس ها';
  // }, []);

  return (
    <Container>
      <Header>خدمات دیجی پی</Header>
      <ServiceGridContainer>
        <IconGrid>
          <ItemGrid onClick={() => gotoPath('/service/charge')}>
            <HomeServiceIcon>
              <img src={Charge} width={44} height={57} alt="charge" />
            </HomeServiceIcon>
            <Label>خرید شارژ</Label>
          </ItemGrid>
          <ItemGrid onClick={() => gotoPath('/service/internet')}>
            <HomeServiceIcon>
              <img src={InternetPackage} width={44} height={44} alt="charge" />
            </HomeServiceIcon>
            <Label>بسته اینترنت</Label>
          </ItemGrid>
          <ItemGrid>
            <HomeServiceIcon>
              <img src={BillPay} width={44} height={33.4} alt="charge" />
            </HomeServiceIcon>
            <Label>پرداخت قبض</Label>
          </ItemGrid>
          <ItemGrid>
            <HomeServiceIcon>
              <img src={AghsatiService} width={44} height={44} alt="charge" />
            </HomeServiceIcon>
            <Label>خرید اقساطی</Label>
          </ItemGrid>
          <ItemGrid>
            <HomeServiceIcon>
              <img src={RoadTolls} width={44} height={44} alt="charge" />
            </HomeServiceIcon>
            <Label>عوارض جاده‌ای</Label>
          </ItemGrid>
          <ItemGrid>
            <HomeServiceIcon disabled={true}>
              <img src={Traffic} width={44} height={44} alt="charge" />
            </HomeServiceIcon>
            <Label>استعلام جریمه</Label>
          </ItemGrid>
        </IconGrid>
      </ServiceGridContainer>
    </Container>
  );
}
