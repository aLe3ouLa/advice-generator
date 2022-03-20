import styled from 'styled-components';
import diceImg from '../../images/icon-dice.svg';

const StyledCard = styled.main`

width: 40%;
min-height: 200px;
border-radius: 20px;
  background-color: hsl(217, 19%, 24%);
  padding: 40px;

  position: relative;
`

const DiceButton = styled.button`
  width: 70px;
  height: 70px;
  background-color: hsl(150, 100%, 66%);
  border-radius: 50%;
  border: none;

  display: grid;
  place-items: center;

  position: absolute;
  bottom: -35px;

  left: 50%;
  transform: translate(-50%, -0%);
`;

const Header = styled.h1`
  font-size: 14px;
  color: hsl(150, 100%, 66%);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
`

const Advice = styled.blockquote`
  font-size: 28px;
  color: hsl(193, 38%, 86%);
  text-align: center;
`

export const Card = (props) => {
  const { id, advice } = props.advice;
  return (
    <StyledCard>
      <Header>Advice # {id}</Header>
      <Advice>&ldquo;{advice}&rdquo;</Advice>

      <DiceButton onClick={props.fetchNewAdvice}>
        <img src={diceImg} alt="Click to generate a random advice" />
      </DiceButton>
    </StyledCard>
  );
};
