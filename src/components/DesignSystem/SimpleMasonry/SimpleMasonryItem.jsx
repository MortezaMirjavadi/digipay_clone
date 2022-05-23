import styled from 'styled-components/macro';
import MCI from '@assets/icons/mci.png';
import MTN from '@assets/icons/mtn.png';
import RIGHTEL from '@assets/icons/rightel.png';
import ArrowIcon from '@assets/icons/chevron-left.svg';

const Item = styled.div`
  margin-bottom: 16px;
  border: 1px solid #78e7ea;
  color: #2c3544;
  font-size: 1.7142857143rem;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Body = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: url(${props => props.src}) no-repeat 0 0/100%;
`;
const ItemType = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const ItemTypeText = styled.span`
  margin-bottom: 5px;
  font-size: 1.1428571429rem;
`;
const MoreData = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-top-color: inherit;
`;
const Footer = styled.div`
  background: azure;
  padding: 4px 12px;
  border-top: 1px solid;
  border-top-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DetailText = styled.span`
  margin-bottom: 4px;
  color: #6e798d;
  font-size: 0.9285714286rem;
  line-height: 1.5em;
  font-weight: 700;
`;
const ReturnIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url(${ArrowIcon}) no-repeat center;
  cursor: pointer;
`;
const Amount = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const SimpleMasonryItem = ({title, imageId, amount, description}) => {
  return (
    <Item>
      <Body>
        <Logo
          src={imageId === 'MCI' ? MCI : imageId === 'MTN' ? MTN : RIGHTEL}
        />
        <ItemType>
          <ItemTypeText>{title}</ItemTypeText>
        </ItemType>
      </Body>
      <MoreData>
        <DetailText>{description}</DetailText>
      </MoreData>
      <Footer>
        <Amount>{amount}</Amount>
        <ReturnIcon />
      </Footer>
    </Item>
  );
};

export default SimpleMasonryItem;
