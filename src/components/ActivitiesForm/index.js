import { useState } from "react";
import styled from "styled-components";

import DashboardPageSubtitle from "../Dashboard/DashboardPageSubtitle";
import DashboardPageTitle from "../Dashboard/DashboardPageTitle";
import Button from "../Form/Button";

export default function ActivitiesForm({ hotel, selectedHotel, setSelectedHotel }) {
  const [daySelect, setDaySelected] = useState(null);

  return (
    <Container>
      <DashboardPageTitle>Escolha de atividades</DashboardPageTitle>
      <DashboardPageSubtitle>Primeiro, filtre pelo dia do evento:</DashboardPageSubtitle>
      <ContainerButtons>
        <DayButton isSelected>Sexta, 22/10</DayButton>
      </ContainerButtons>
    </Container>
  );
}

const ContainerButtons = styled.div`
  display: flex;
`;

const DayButton = styled(Button)`
  margin-right: 17px !important;
  ${({ isSelected }) => isSelected && "background-color: #FFD37D !important;"}
`;
  
const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
