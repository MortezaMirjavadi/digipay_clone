import styled from 'styled-components/macro';
import DigiPayLogo from '@assets/icons/digipaylogo.png';
import CardActions from './CardActions';
import CardBackground from '@assets/icons/cardBackground.png';

const Container = styled.div`
  width: 300px;
  max-width: 290px;
  position: relative;
`;
const HomeCardContainer = styled.div`
  width: 100%;
  background: url(${CardBackground}) 0px 0px / 100% 100% no-repeat
    rgb(0, 64, 255);
  ${'' /* background: 0px 0px / 100% 100% no-repeat rgb(0, 64, 255); */}
  color: #fff;
  font-weight: 400;
  border-radius: 16px;
  text-align: center;
  padding: 16px;
  direction: rtl;
  margin-left: auto;
  margin-right: auto;
  height: 144px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
`;
const MainValue = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 14px 0;
  direction: ltr;
`;
const Value = styled.div`
  color: rgb(255, 255, 255);
  display: inline-block;
  padding: 4px 8px;
  border-radius: 8px;
`;
const CardFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
`;
const CardFooterItem = styled.div`
  padding: 4px;
  border-radius: 8px;
  display: inline-block;
  overflow: hidden;
  max-width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default function HomeCard() {
  return (
    <Container>
      <HomeCardContainer>
        <Header>
          <img width={32} height={32} src={DigiPayLogo} alt="DigiPay" />
          کیف پول دیجی پی
        </Header>
        <MainValue>
          <Value>‫۲٫۲۳۵ ریال</Value>
        </MainValue>
        <CardFooter>
          <CardFooterItem>سید مرتضی میرجوادی</CardFooterItem>
        </CardFooter>
      </HomeCardContainer>
      <CardActions />
    </Container>
  );
}
