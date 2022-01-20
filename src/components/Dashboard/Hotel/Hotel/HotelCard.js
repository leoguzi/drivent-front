import { HotelCardStyle, HotelImageContainer, HotelName, InfoTitle, InfoData } from "./Styles";

export default function HotelCard({ hotel }) {
  return (
    <HotelCardStyle>
      <HotelImageContainer>
        <img src={hotel.image} alt={"Foto ilustrativa do hotel"}/>
      </HotelImageContainer>

      <HotelName variant="body1">{hotel.name}</HotelName>

      <div>
        <InfoTitle variant="h6">Tipo de acomodação</InfoTitle>
        <InfoData variant="body1">{hotel.roomTypes.join(", ")}</InfoData>
     
        <InfoTitle variant="h6">Vagas disponíveis</InfoTitle>
        <InfoData variant="body1">{hotel.availableVacancies}</InfoData>
      </div>
    </HotelCardStyle>
  );
}
