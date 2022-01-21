import { useState } from "react";
import { useEffect } from "react";
import useApi from "../../../../hooks/useApi";
import SectionContainer from "../../SectionContainer";

export default function RoomSection({ selectedHotel }) {
  selectedHotel = 1; //just for development

  const { hotel } = useApi();

  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    hotel.getHotelRooms(selectedHotel).then(resp => setRooms(resp.data)).catch(error => console.error(error));
  }, []);

  return (
    <SectionContainer title='Ótima pedida! Agora escolha seu quarto'>
      Conteiner de quartos
    </SectionContainer>
  );
}
