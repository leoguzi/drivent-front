import { useContext } from "react";
import ReservationContext from "../../../../contexts/ReservationContext";
import { HotelCardsContainerStyle } from "../Hotel/Styles";
import ReservedRoomCard from "./ReservedRoomCard";

export default function ReservedRoom() {
  const { confirmedReservation } = useContext(ReservationContext);

  return (
    <>
      <HotelCardsContainerStyle>
        <ReservedRoomCard room={confirmedReservation.room} />
      </HotelCardsContainerStyle>
      
    </>
  );
}
