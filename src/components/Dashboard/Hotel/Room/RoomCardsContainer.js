import RoomCard from "./RoomCard";
import { RoomCardsContainerStyle } from "./Styles";

export default function RoomCardsContainer({ roomsArray }) {
  const roomInfo = null;
  const setRoomInfo = () => {console.log("set room info");};

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
