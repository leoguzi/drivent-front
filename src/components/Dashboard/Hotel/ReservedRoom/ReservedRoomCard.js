import {
  HotelCardStyle,
  HotelImageContainer,
  HotelName,
  InfoTitle,
  InfoData,
} from "../Hotel/Styles";

export default function ReservedRoomCard({ room }) {
  const roomTypes = {
    1: "Single",
    2: "Double",
    3: "Triple",
  };
  return (
    <HotelCardStyle>
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
          {`Você e mais ${room.reservations - 1}`}
        </InfoData>
      </div>
    </HotelCardStyle>
  );
}
