import { useContext, useState } from "react";
import DashboradPageTitle from "../../../components/Dashboard/DashboradPageTitle";
import HotelSection from "../../../components/Dashboard/Hotel/Hotel/HotelSection";
import ReservedRoom from "../../../components/Dashboard/Hotel/ReservedRoom/ReservedRoom";
import RoomSection from "../../../components/Dashboard/Hotel/Room/RoomSection";
import ReservationContext from "../../../contexts/ReservationContext";

export default function Hotel() {
  const { confirmedReservation } = useContext(ReservationContext);
  const [selectedHotel, setSelectedHotel] = useState(true); //default = null, set true just for test
  const [changeRoom, setChangeRoom] = useState(false);

  return (
    <>
      <DashboradPageTitle>Escolha de hotel e quarto</DashboradPageTitle>
      {confirmedReservation && !changeRoom ? (
        <ReservedRoom
          roomInfo={confirmedReservation.room}
          setChangeRoom={setChangeRoom}
        />
      ) : (
        <>
          <HotelSection setSelectedHotel={setSelectedHotel} />
          {selectedHotel ? (
            <RoomSection
              selectedHotel={selectedHotel}
              setChangeRoom={setChangeRoom}
            />
          ) : null}
        </>
      )}
    </>
  );
}
