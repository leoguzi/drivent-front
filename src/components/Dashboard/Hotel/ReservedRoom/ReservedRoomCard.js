import {
  HotelImageContainer,
  HotelName,
  InfoTitle,
  InfoData,
} from "../Hotel/Styles";

import { ReservedRoomCardStyle } from "../Room/Styles";

export default function ReservedRoomCard({ room }) {
  const roomTypes = {
    1: "Single",
    2: "Double",
    3: "Triple",
  };
  return (
    <ReservedRoomCardStyle>
      <HotelImageContainer>
        <img src={room.hotel.image} alt={"Foto ilustrativa do hotel"} />
      </HotelImageContainer>

      <HotelName variant="body1">{room.hotel.name}</HotelName>

      <div>
        <InfoTitle variant="h6">Quarto reservado</InfoTitle>
        <InfoData variant="body1">{`${room.name} (${
          roomTypes[room.vacancies]
        })`}</InfoData>

        <InfoTitle variant="h6">Pessoas no seu quarto</InfoTitle>
        <InfoData variant="body1">
          {
            room.reservations - 1 ===0
              ? "Você"
              : `Você e mais ${room.reservations - 1}`
          }
        </InfoData>
      </div>
    </ReservedRoomCardStyle>
  );
}
