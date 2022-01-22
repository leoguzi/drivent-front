import { useState } from "react";
import { useEffect } from "react";
import useApi from "../../../../hooks/useApi";
import SectionContainer from "../../SectionContainer";
import RoomCardsContainer from "./RoomCardsContainer";

export default function RoomSection({ selectedHotel }) {
  selectedHotel = 1; //just for development

  const { hotel } = useApi();

  const [roomsArray, setRoomsArray] = useState(null);

  useEffect(() => {
    hotel
      .getHotelRooms(selectedHotel)
      .then((resp) => setRoomsArray(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SectionContainer title="Ótima pedida! Agora escolha seu quarto">
      <RoomCardsContainer roomsArray={roomsArray} />
    </SectionContainer>
  );
}
