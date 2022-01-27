import { HotelCardStyle, HotelImageContainer, HotelName, InfoTitle, InfoData } from "./Styles";

export default function HotelCard({ hotel, selectedHotel, setSelectedHotel }) {  
  const changeActiveHotel = (hotel, selectedHotel) => {
    return (
      !selectedHotel
        ? false
        : selectedHotel.id === hotel.id
          ? true
          : false
    );
  };

  return (
    <HotelCardStyle isActive={changeActiveHotel(hotel, selectedHotel)} onClick={() => setSelectedHotel(hotel)}>
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
