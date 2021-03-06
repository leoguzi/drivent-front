import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import useApi from "../../hooks/useApi";
import ActivityColumn from "../Dashboard/Activities/ActivityColumn";
import DashboardPageSubtitle from "../Dashboard/DashboardPageSubtitle";
import Button from "../Form/Button";

export default function ActivitiesForm() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [activitiesByDate, setActivitiesByDate] = useState([]);
  const { activities: activitiesApi } = useApi();
  const [updateActivities, setUpdateActivities] = useState(false);

  useEffect(() => {
    activitiesApi
      .getActivities()
      .then((res) => {
        setActivitiesByDate(res.data);
      })
      .catch(() => toast.error("Não foi possível obter as atividades"));
  }, [updateActivities]);

  return (
    <Container>
      <DashboardPageSubtitle>
        Primeiro, filtre pelo dia do evento:
      </DashboardPageSubtitle>
      <ContainerButtons>
        {activitiesByDate
          .sort(
            (a, b) =>
              dayjs(a.date.slice(-5), "DD/MM") -
              dayjs(b.date.slice(-5), "DD/MM")
          )
          .map(({ date }, index) => (
            <DayButton
              key={index}
              $isSelected={selectedDay === index}
              onClick={() => {
                setSelectedDay(index);
                setUpdateActivities(!updateActivities);
              }}
            >
              {date.replace("-feira", "")}
            </DayButton>
          ))}
      </ContainerButtons>
      {selectedDay !== null && (
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
        </ActivitiesContainer>
      )}
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
