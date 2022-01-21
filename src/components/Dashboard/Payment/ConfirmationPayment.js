import styled from "styled-components";
import { ReactComponent as ConfirmIcon } from "../../../assets/icons/confirm-icon.svg"; 

export default function ConfirmationPayment({ children }) {
  return (
    <Container>
      <Confirm />
      <div>
        <TextBold>Pagamento confirmado!</TextBold>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </div>
    </Container>
  );
}

const Confirm = styled(ConfirmIcon)`
  margin-right: 10px;
  svg {
    height: 40px;
  }
`;

const TextBold = styled.p`
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  > div {
    font-size: 16px;
    color: #454545;

    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
`;

