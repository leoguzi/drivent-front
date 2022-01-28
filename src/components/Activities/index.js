import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import DashboardWarning from "../Dashboard/DashboardWarning";
import DashboardPageTitle from "../Dashboard/DashboardPageTitle";
import DashboardLoader from "../Dashboard/Loader";
import  styled  from "styled-components";

export default function ActivitiesGrid() {
  const [ticketInfo, setTicketInfo] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const { ticket } = useApi();
    
  useEffect(() => {
    ticket.getTicketInformation()
      .then((response) => {
        setTicketInfo(response.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
      });
  }, []);
    
  return (
    <Container>
      <DashboardPageTitle>Escolha de Atividades</DashboardPageTitle>
      {isLoading ? <DashboardLoader /> :
        !ticketInfo?.paymentDate ?
          <DashboardWarning>
                Você precisa ter confirmado pagamento antes de
                fazer a escolha de atividades
          </DashboardWarning> :
          ticketInfo?.type === "online" ?
            <DashboardWarning>
            Sua modalidade de ingresso não necessita escolher atividade.
            Você terá acesso a todas as atividades.
            </DashboardWarning > : "Carregar o componente da agenda aqui"}
    </Container>);
}

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
