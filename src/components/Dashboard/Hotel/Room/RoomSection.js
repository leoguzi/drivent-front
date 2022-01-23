import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReservationContext from "../../../../contexts/ReservationContext";
import useApi from "../../../../hooks/useApi";
import Button from "../../../Form/Button";
import SectionContainer from "../../SectionContainer";
import RoomCardsContainer from "./RoomCardsContainer";

export default function RoomSection({ selectedHotel, setChangeRoom }) {
  selectedHotel = 1; //just for development

  const { hotel, reservation } = useApi();
  const [roomsArray, setRoomsArray] = useState(null);
  const { reservationInfo, setConfirmedReservation } =
    useContext(ReservationContext);

  useEffect(() => {
    hotel
      .getHotelRooms(selectedHotel)
      .then((resp) => setRoomsArray(resp.data))
      .catch((error) => console.error(error));
  }, []);

  function handleSaveReservation() {
    if (reservationInfo?.roomId)
      reservation
        .save(reservationInfo)
        .then((resp) => {
          setConfirmedReservation(undefined);
          setChangeRoom(false);
        })
        .catch((error) => console.error(error));
  }

  return (
    <SectionContainer title="Ótima pedida! Agora escolha seu quarto">
      <RoomCardsContainer roomsArray={roomsArray} />
      <Button children={"RESERVAR QUARTO"} onClick={handleSaveReservation} />
    </SectionContainer>
  );
}
