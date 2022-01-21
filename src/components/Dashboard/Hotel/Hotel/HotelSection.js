import { useState, useEffect } from "react";
import SectionContainer from "../../SectionContainer";
import HotelCardsContainer from "./HotelCardsContainer";
import useApi from "../../../../hooks/useApi";

export default function HotelSection({ selectedHotel, setSelectedHotel }) {
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState(null);
  const api = useApi();

  useEffect(() => {
    api.hotel.getAllHotels()
      .then(response => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false); 
        alert(error);
      });
  }, []);
      
  return (
    <SectionContainer title='Primeiro, escolha seu hotel'>
      {
        loading
          ? <p>carregando...</p>
          : <HotelCardsContainer hotelsArray={hotels}/>
      }
    </SectionContainer>
  );
}
