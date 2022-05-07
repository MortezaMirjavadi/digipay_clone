import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import UserIcon from '../../assets/icons/user.svg';

const Size = {
  small: '24px',
  medium: '32px',
  large: '48px',
};
const sizeVariants = ['small', 'medium', 'large'];

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background: transparent;
  color: #6e798d;
  border-color: #6e798d;
  height: ${props => Size[props.size] || Size.large};
  padding: 0 12px;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid;
  ${'' /* border: 1px solid #0040ff; */}
  ${'' /* background: #0040ff; */}
  ${'' /* color: #fff; */}
  border-radius: 12px;
  box-shadow: none;
  &:hover {
    background: #f0f0f0;
  }
  &:active {
    background: #fff;
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  background: transparent no-repeat 0 0/100%;
  display: inline-block;
  cursor: pointer;
`;
const Label = styled.span`
  font-size: 1rem;
`;

function Button({label, size, disabled, onClick}) {
  return (
    <Container>
      <Btn disabled={disabled} onClick={onClick} size={size}>
        {/* <Icon src={UserIcon} /> */}
        <Label>{label}</Label>
      </Btn>
    </Container>
  );
}
Button.displayName = 'Button';

Button.propTypes = {
  size: PropTypes.oneOf(sizeVariants),
};

Button.defaultProps = {
  size: 'large',
};

export default Button;
