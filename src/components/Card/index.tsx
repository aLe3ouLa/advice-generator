import styled from 'styled-components';
import { IAdvice } from '../../App';

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

const Divider = styled.div`
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

      <Divider>
        {window.innerWidth < 500 ? (
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        ) : (
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        )}
      </Divider>

      <DiceButton onClick={props.fetchNewAdvice}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </DiceButton>
    </StyledCard>
  );
};
