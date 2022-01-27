import styled from "styled-components";
import { useContext, useState } from "react";

import ReservationContext from "../../../contexts/ReservationContext";
import DashboardPageTitle from "../../../components/Dashboard/DashboardPageTitle";
import HotelSection from "../../../components/Hotel/Hotel/HotelSection";
import RoomSection from "../../../components/Dashboard/Hotel/Room/RoomSection";
import ReservedRoomSection from "../../../components/Dashboard/Hotel/ReservedRoom/ReservedRoomSection";

export default function Hotel() {
  const { confirmedReservation } = useContext(ReservationContext);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [changeRoom, setChangeRoom] = useState(false);
	    
  return (
    <Container>
      <DashboardPageTitle>Escolha de hotel e quarto</DashboardPageTitle>

      {confirmedReservation && !changeRoom ? (
        <ReservedRoomSection
          setChangeRoom={setChangeRoom}
        />
      ) : (
        <>
          <HotelSection
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
          />
          {selectedHotel ? (
            <RoomSection
              selectedHotel={selectedHotel}
              setChangeRoom={setChangeRoom}
            />
          ) : null}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
