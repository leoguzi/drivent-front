import { useState, useEffect } from "react";
import SectionContainer from "../../SectionContainer";
import HotelCardsContainer from "./HotelCardsContainer";
import useApi from "../../../../hooks/useApi";
import FullDashboardPageWarning from "../../FullDashboardPageWarning";

export default function HotelSection({ selectedHotel, setSelectedHotel }) {
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState(null);
  const [error, setError] = useState(null);
  const api = useApi();

  useEffect(() => {
    function errorHandler(error) {
      if(error.response) {
        setError({
          status: error.response.status,
          message: error.response.data.message
        });
      }else if(error.request) {
        alert("O servidor está fora do ar!");
      }else{
        alert("Houve um erro. Por favor, tente novamente.");
      }
    }

    api.hotel.getAllHotels()
      .then(response => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        
        errorHandler(error);
      });
  }, []);
      
  return (
    loading
      ? <p>carregando...</p>
      :error
        ?<FullDashboardPageWarning message={error.message}/>
        :(
          <SectionContainer title='Primeiro, escolha seu hotel'>
            <HotelCardsContainer
              hotelsArray={hotels}
              selectedHotel={selectedHotel}
              setSelectedHotel={setSelectedHotel} />
          </SectionContainer>
        )
  );
}
