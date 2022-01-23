import HotelCard from "./HotelCard";
import { HotelCardsContainerStyle, NoContentWarning } from "./Styles";

export default function HotelCardsContainer({ hotelsArray, selectedHotel, setSelectedHotel }) {
  return (
    <HotelCardsContainerStyle>
      {
        !hotelsArray
          ? <NoContentWarning>Não há hoteis disponíveis.</NoContentWarning>
          : hotelsArray.map((hotel, i) => (
            <HotelCard
              hotel={hotel}
              selectedHotel={selectedHotel}
              setSelectedHotel={setSelectedHotel}
              key={i}/>
          ))
      }
    </HotelCardsContainerStyle>
  );
}

