import { useEffect, useState } from "react";
import DashboardPageTitle from "../Dashboard/DashboardPageTitle";
import styled from "styled-components";
import SelectTicket from "./TicketSelection";
import Payment from "./Payment";
import useApi from "../../hooks/useApi";

export default function PaymentForm() {
  const [isReserved, setIsReserved] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(null);
  const [ticketInfo, setTicketInfo] = useState(false);

  const { ticket } = useApi();

  useEffect(() => {
    ticket.getTicketInformation().then((response) => {
      const { data: ticketInfo } = response;
      setTicketInfo(ticketInfo);
      if (ticketInfo) setIsReserved(true);
      if (ticketInfo.paymentDate) setIsConfirmed(true);
    }).catch(() => setIsReserved(false));
  }, [isReserved, isConfirmed]);

  return (
    <Container>
      <DashboardPageTitle>Ingresso e Pagamento</DashboardPageTitle>
      {isReserved === true && <Payment ticketInfo={ticketInfo} setIsConfirmed={setIsConfirmed} />}
      {isReserved === false && <SelectTicket setIsReserved={setIsReserved} />}
    </Container>
    
  );
}
const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
