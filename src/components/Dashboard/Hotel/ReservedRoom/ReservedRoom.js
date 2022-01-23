import Button from "../../../Form/Button";
import { HotelCardsContainerStyle } from "../Hotel/Styles";
import ReservedRoomCard from "./ReservedRoomCard";

export default function ReservedRoom({ roomInfo, setChangeRoom }) {
  return (
    <>
      <div>Você já escolheu seu quarto</div>

      <HotelCardsContainerStyle>
        <ReservedRoomCard room={roomInfo} />
      </HotelCardsContainerStyle>
      <Button
        children={"TROCAR DE QUARTO"}
        onClick={() => setChangeRoom(true)}
      />
    </>
  );
}
