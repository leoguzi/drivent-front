import { useState } from "react";
import DashboradPageTitle from "../../../components/Dashboard/DashboradPageTitle";
import HotelSection from "../../../components/Dashboard/Hotel/Hotel/HotelSection";
import RoomSection from "../../../components/Dashboard/Hotel/Room/RoomSection";

import styled from "styled-components";

export default function Hotel() {
  const [selectedHotel, setSelectedHotel] = useState(null);
	  
  return (
    <Container>
      <DashboradPageTitle>Escolha de hotel e quarto</DashboradPageTitle>
      <HotelSection selectedHotel={selectedHotel} setSelectedHotel={setSelectedHotel}/>

      {
	      selectedHotel
          ?<RoomSection selectedHotel={selectedHotel}/>
          :null
      }
    </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
