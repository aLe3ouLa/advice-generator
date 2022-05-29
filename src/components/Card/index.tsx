import styled from 'styled-components';
import { IAdvice } from '../../App';
import diceImg from '../../images/icon-dice.svg';
import hrDesktop from '../../images/pattern-divider-desktop.svg';
import hrMobile from '../../images/pattern-divider-mobile.svg';

const StyledCard = styled.main`
  width: 40%;
  min-height: 220px;
  border-radius: 20px;
  background-color: hsl(217, 19%, 24%);
  padding: 40px;

  position: relative;

  display: grid;
  place-items: start center;

  @media (max-width: 768px) {
    width: 85%;
    padding: 30px;
    min-height: 300px;
  }
`;

const DiceButton = styled.button`
  width: 65px;
  height: 65px;
  background-color: hsl(150, 100%, 66%);
  border-radius: 50%;
  border: none;

  display: grid;
  place-items: center;

  position: absolute;
  bottom: -35px;

  left: 50%;
  transform: translate(-50%, -0%);

  &:hover {
    box-shadow: 0px 0px 28px hsl(150, 100%, 66%);
  }
`;

const Header = styled.h1`
  font-size: 14px;
  color: hsl(150, 100%, 66%);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;

const Advice = styled.blockquote`
  font-size: 28px;
  color: hsl(193, 38%, 86%);
  text-align: center;
  font-weight: 800;
`;

const Divider = styled.img`
  margin-bottom: 20px;
`;

export const Card: React.FC<{ advice: IAdvice; fetchNewAdvice: () => void }> = (
  props
) => {
  const { id, advice } = props.advice;
  return (
    <StyledCard>
      <Header>Advice # {id}</Header>
      <Advice>&ldquo;{advice}&rdquo;</Advice>

      <Divider src={window.innerWidth < 500 ? hrMobile : hrDesktop} alt="" />

      <DiceButton onClick={props.fetchNewAdvice}>
        <img src={diceImg} alt="Click to generate a random advice" />
      </DiceButton>
    </StyledCard>
  );
};
