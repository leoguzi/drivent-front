import { useState } from "react";
import RoomCard from "./RoomCard";
import { RoomCardsContainerStyle } from "./Styles";

export default function RoomCardsContainer({ roomsArray }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <RoomCardsContainerStyle>
      {roomsArray?.map((room) => (
        <RoomCard
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          room={room}
          key={room.id}
        />
      ))}
    </RoomCardsContainerStyle>
  );
}
