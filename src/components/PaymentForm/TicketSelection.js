import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import styled from "styled-components";
import DashboardPageSubtitle from "../Dashboard/DashboardPageSubtitle";
import DashboardPageTitle from "../Dashboard/DashboardPageTitle";
import DashboardWarning from "../Dashboard/DashboardWarning";
import ConfirmButton from "../../components/Dashboard/NavigationBar/ConfirmButton";

export default function SelectTicket() {
  const [enrollmentStatus, setEnrollmentStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ticketInfo, setTicketInfo] = useState({});
  const [ticketValue, setTicketValue] = useState(0);
  const { enrollment } = useApi();

  useEffect(() => {
    enrollment.getPersonalInformations()
      .then(response => {
        setEnrollmentStatus(response.status);
        setIsLoading(false);
      });
  });
    
  function handleSubmit() {
        
  }
    
  function updateTicketValue() {
    const typeValue = ticketInfo.type === "presential" ? 250 : 100; ;
    const hotelValue = ticketInfo.withHotel ? 350 : 0;
    setTicketValue(typeValue+hotelValue);
  }

  useEffect(() => updateTicketValue(), [ticketInfo]);
  
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
                onClick={() => setTicketInfo({ ...ticketInfo,  type: "presential" })}
                selected = {ticketInfo.type === "presential"}
              >
                <p>Presencial</p>
                <p>R$ 250</p>
              </Option>
              <Option
                onClick={() => setTicketInfo({ ...ticketInfo, type: "online" })}
                selected = {ticketInfo.type === "online"}
              >           
                <p>Online</p>
                <p>R$ 100</p>
              </Option>
            </OptionsContainer>
            {ticketInfo.type === "presential" &&
                          (<>
                            <DashboardPageSubtitle>Ótimo! Agora escolha sua modalidade de hospedagem</DashboardPageSubtitle>
                            <OptionsContainer>
                              <Option
                                onClick={() => setTicketInfo({ ...ticketInfo,  withHotel: false })}
                                selected = {ticketInfo.withHotel !== undefined && !ticketInfo.withHotel}
                              >
                                <p>Sem Hotel</p>
                                <p>+R$ 0</p>
                              </Option>
                              <Option
                                onClick={() => setTicketInfo({ ...ticketInfo, withHotel: true })}
                                selected = {ticketInfo.withHotel}
                              >           
                                <p>Com Hotel</p>
                                <p>+R$ 350</p>
                              </Option>
                            </OptionsContainer>
                          </>)
            }
            {(ticketInfo.type === "online" || ticketInfo.withHotel !== undefined) &&
                          (<>
                            <DashboardPageSubtitle>
                              Fechado! O total ficou em
                              <strong> R$ {ticketValue}</strong>.
                              Agora é só confirmar:
                            </DashboardPageSubtitle>
                            <ConfirmButton onClick={() => handleSubmit()}>RESERVAR INGRESSO</ConfirmButton>
                          </>
                          )}
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
border: ${(props) => props.selected ? "none": "1px solid #C8C8C8"};
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
