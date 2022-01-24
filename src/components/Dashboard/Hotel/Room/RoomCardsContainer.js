import RoomCard from "./RoomCard";
import { RoomCardsContainerStyle } from "./Styles";

export default function RoomCardsContainer({ roomsArray }) {
  return (
    <RoomCardsContainerStyle>
      {roomsArray?.map((room) => (
        <RoomCard
          room={room}
          key={room.id}
        />
      ))}
    </RoomCardsContainerStyle>
  );
}
