import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import styled from "styled-components";
import DashboardPageSubtitle from "../Dashboard/DashboardPageSubtitle";
import DashboardPageTitle from "../Dashboard/DashboardPageTitle";
import DashboardWarning from "../Dashboard/DashboardWarning";

export default function SelectTicket() {
  const [enrollmentStatus, setEnrollmentStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ticketInfo, setTicketInfo] = useState({ withHotel: false });
  const { enrollment } = useApi();

  useEffect(() => {
    enrollment.getPersonalInformations()
      .then(response => {
        setEnrollmentStatus(response.status);
        setIsLoading(false);
      });
  });
        
  return (
    isLoading ? (<p>Carregando...</p>) :
      (enrollmentStatus === 204 ?
        (<DashboardWarning>
        Você precisa completar sua inscrição antes de prosseguir
        para escolha de ingresso
        </DashboardWarning>) : (
          <>
            <DashboardPageTitle>Ingresso e Pagamento</DashboardPageTitle>
            <DashboardPageSubtitle>Primeiro, escolha sua modalidade de ingresso</DashboardPageSubtitle>
            <OptionsContainer>
              <Option
                value='presential'
                onClick={() => setTicketInfo({ ...ticketInfo,  type: "presential" })}
                selected = {ticketInfo.type === "presential"}
              >
                <p>Presencial</p>
                <p>R$ 250</p>
              </Option>
              <Option
                value='online'
                onClick={() => setTicketInfo({ ...ticketInfo, type: "online" })}
                selected = {ticketInfo.type === "online"}
              >           
                <p>Online</p>
                <p>R$ 100</p>
              </Option>
            </OptionsContainer>
            <DashboardPageSubtitle>Ótimo! Agora escolha sua modalidade de hospedagem</DashboardPageSubtitle>

          </>)));
}

const OptionsContainer = styled.div`
display: flex;
margin-bottom: 20px;
`;

const Option = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 145px;
height: 145px;
border: 1px solid #C8C8C8;
border-radius: 20px;
margin-right: 15px;
background-color: ${(props) => props.selected ? "#FFEED2": "#FFFFFF"};

    p:first-child{
        margin-bottom: 5px;
    }
    p:nth-child(2){
        color: #C8C8C8
    }
`;
