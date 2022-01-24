import { useState, useEffect } from "react";
import useApi from "../../../../hooks/useApi";

import SectionContainer from "../../SectionContainer";
import RoomCardsContainer from "./RoomCardsContainer";

export default function RoomSection({ selectedHotel }) {
  const api = useApi();
  const [roomsArray, setRoomsArray] = useState(null);

  useEffect(() => {
    api.hotel
      .getHotelRooms(selectedHotel)
      .then((resp) => setRoomsArray(resp.data))
      .catch((error) => console.error(error));
  }, [selectedHotel]);

  return (
    <SectionContainer title='Ótima pedida! Agora escolha seu quarto'>
      <RoomCardsContainer roomsArray={roomsArray} />
    </SectionContainer>
  );
}
