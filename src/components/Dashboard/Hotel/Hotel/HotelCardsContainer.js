import HotelCard from "./HotelCard";
import { HotelCardsContainerStyle } from "./Styles";

export default function HotelCardsContainer({ hotelsArray }) {
  return (
    <HotelCardsContainerStyle>
      {
        !hotelsArray
          ? <p>Não há hoteis disponíveis.</p>
          : hotelsArray.map((hotel, i) => <HotelCard hotel={hotel} key={i}/>)
      }
    </HotelCardsContainerStyle>
  );
}
