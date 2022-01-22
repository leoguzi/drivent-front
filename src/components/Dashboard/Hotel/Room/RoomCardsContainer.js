import { useContext } from "react";
import ReservationContext from "../../../../contexts/ReservationContext";
import RoomCard from "./RoomCard";
import { RoomCardsContainerStyle } from "./Styles";

export default function RoomCardsContainer({ roomsArray }) {
  const { roomInfo, setRoomInfo } = useContext(ReservationContext);

  return (
    <RoomCardsContainerStyle>
      {roomsArray?.map((room) => (
        <RoomCard
          selectedRoom={roomInfo}
          setSelectedRoom={setRoomInfo}
          room={room}
          key={room.id}
        />
      ))}
    </RoomCardsContainerStyle>
  );
}
