import { useEffect, useState } from "react";
import styled from "styled-components";

import useApi from "../../../hooks/useApi";

import SectionSubtitle from "../../../components/Dashboard/NavigationBar/SectionSubtitle";
import SectionTitle from "../../../components/Dashboard/NavigationBar/SectionTitle";

export default function Payment() {
  const [ ticketInfo, setTicketInfo ] = useState(null);
  const { ticket } = useApi();

  useEffect(() => {
    const { data } = ticket.getTicketInformations();
    console.log(data);
    setTicketInfo(data);
  }, []);

  return (
    <>
      <SectionTitle>Ingresso e pagamento</SectionTitle>
      <SectionSubtitle>Ingresso escolhido</SectionSubtitle>
      <TicketInfo>
        <h3>
          {(ticketInfo?.type === "online")
            ? "Online"
            : ("Presencial" + (ticketInfo?.withHotel ? " + Com Hotel" : ""))
          }
        </h3>
        <p>R$ {ticketInfo?.value}</p>
      </TicketInfo>
      <SectionSubtitle>Pagamento</SectionSubtitle>
    </>);
}

const TicketInfo = styled.div`
  background-color: #FFEED2;
  border-radius: 20px;
  width: 290px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 10px;
    color: #898989;
    font-size: 14px;
  }
`;
