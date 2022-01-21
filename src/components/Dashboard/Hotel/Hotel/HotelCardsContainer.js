import HotelCard from "./HotelCard";
import { HotelCardsContainerStyle, NoContentWarning } from "./Styles";

export default function HotelCardsContainer({ hotelsArray }) {
  return (
    <HotelCardsContainerStyle>
      {
        !hotelsArray
          ? <NoContentWarning>Não há hoteis disponíveis.</NoContentWarning>
          : hotelsArray.map((hotel, i) => <HotelCard hotel={hotel} key={i}/>)
      }
    </HotelCardsContainerStyle>
  );
}

