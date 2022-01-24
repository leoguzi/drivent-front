import { useContext } from "react";
import ReservationContext from "../../../../contexts/ReservationContext";
import Button from "../../../Form/Button";
import { HotelCardsContainerStyle } from "../Hotel/Styles";
import ReservedRoomCard from "./ReservedRoomCard";

export default function ReservedRoom({ setChangeRoom }) {
  const { confirmedReservation } = useContext(ReservationContext);

  return (
    <>
      <div>Você já escolheu seu quarto</div>

      <HotelCardsContainerStyle>
        <ReservedRoomCard room={confirmedReservation.room} />
      </HotelCardsContainerStyle>
      <Button
        children={"TROCAR DE QUARTO"}
        onClick={() => setChangeRoom(true)}
      />
    </>
  );
}
