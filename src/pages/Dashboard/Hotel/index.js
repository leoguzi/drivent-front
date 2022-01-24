import styled from "styled-components";
import { useContext, useState } from "react";

import ReservationContext from "../../../contexts/ReservationContext";
import DashboradPageTitle from "../../../components/Dashboard/DashboradPageTitle";
import HotelSection from "../../../components/Dashboard/Hotel/Hotel/HotelSection";
import RoomSection from "../../../components/Dashboard/Hotel/Room/RoomSection";
import ReservedRoomSection from "../../../components/Dashboard/Hotel/ReservedRoom/ReservedRoomSection";

export default function Hotel() {
  const { confirmedReservation } = useContext(ReservationContext);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [changeRoom, setChangeRoom] = useState(false);
	    
  return (
    <Container>
      <DashboradPageTitle>Escolha de hotel e quarto</DashboradPageTitle>

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
