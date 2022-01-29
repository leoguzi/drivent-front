import { useState, useEffect, useContext } from "react";
import ReservationContext from "../../../contexts/ReservationContext";
import useApi from "../../../hooks/useApi";
import SectionContainer from "../../Dashboard/SectionContainer";
import RoomCardsContainer from "./RoomCardsContainer";
import Button from "../../Form/Button";

export default function RoomSection({ selectedHotel, setChangeRoom }) {
  const { setRoomInfo, reservationInfo, update, setUpdate } =
    useContext(ReservationContext);
  const api = useApi();
  const [roomsArray, setRoomsArray] = useState(null);

  useEffect(() => {
    api.hotel
      .getHotelRooms(selectedHotel)
      .then((resp) => {
        setRoomsArray(resp.data);
        setRoomInfo(null);
      })
      .catch((error) => console.error(error));
  }, [selectedHotel]);

  function handleSaveReservation() {
    if (reservationInfo?.roomId) {
      api.reservation
        .save(reservationInfo)
        .then(() => {
          setUpdate(!update);
          setChangeRoom(false);
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <SectionContainer title="Ótima pedida! Agora escolha seu quarto">
      <RoomCardsContainer roomsArray={roomsArray} />
      <Button children={"RESERVAR QUARTO"} onClick={handleSaveReservation} />
    </SectionContainer>
  );
}
