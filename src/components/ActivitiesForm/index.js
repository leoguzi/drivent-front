import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import useApi from "../../hooks/useApi";
import ActivityColumn from "../Dashboard/Activities/ActivityColumn";
import DashboardPageSubtitle from "../Dashboard/DashboardPageSubtitle";
import DashboardPageTitle from "../Dashboard/DashboardPageTitle";
import Button from "../Form/Button";

export default function ActivitiesForm() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [activitiesByDate, setActivitiesByDate] = useState([]);

  const { activities: activitiesApi } = useApi();

  useEffect(() => {
    activitiesApi.getActivities().then((res) => {
      setActivitiesByDate(res.data.reverse());
    }).catch(() => toast.error("Não foi possível obter as atividades"));
  }, []);

  return (
    <Container>
      <DashboardPageTitle>Escolha de atividades</DashboardPageTitle>
      <DashboardPageSubtitle>Primeiro, filtre pelo dia do evento:</DashboardPageSubtitle>
      <ContainerButtons>
        {activitiesByDate.map(({ date }, index) => 
          <DayButton key={index} $isSelected={selectedDay === index} onClick={() => setSelectedDay(index)}>
            {date.replace("-feira", "")}
          </DayButton>
        )}
      </ContainerButtons>
      {selectedDay !== null && 
      <ActivitiesContainer>
        <ActivityColumn
          activitiesByDate={activitiesByDate}
          selectedDay={selectedDay}
          title="Auditório Principal"
          location="mainAuditorium"
        />
        <ActivityColumn
          activitiesByDate={activitiesByDate}
          selectedDay={selectedDay}
          title="Auditório Lateral"
          location="sideAuditorium"
        />
        <ActivityColumn
          activitiesByDate={activitiesByDate}
          selectedDay={selectedDay}
          title="Sala de Workshop"
          location="workshopRoom"
        />
      </ActivitiesContainer>}
    </Container>
  );
}

const ActivitiesContainer = styled.div`
  display: flex;
`;

const DayButton = styled(Button)`
  margin-right: 17px !important;
  text-transform: capitalize !important;
  ${({ $isSelected }) => $isSelected && "background-color: #FFD37D !important;"}
`;
  
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerButtons = styled.div`
  display: flex;
`;
