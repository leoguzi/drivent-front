import { useState } from "react";
import DashboradPageTitle from "../../../components/Dashboard/DashboradPageTitle";
import HotelSection from "../../../components/Dashboard/Hotel/Hotel/HotelSection";
import RoomSection from "../../../components/Dashboard/Hotel/Room/RoomSection";

export default function Hotel() {
  const [selectedHotel, setSelectedHotel] = useState(null);
	  
  return (
    <>
      <DashboradPageTitle>Escolha de hotel e quarto</DashboradPageTitle>
      <HotelSection setSelectedHotel={setSelectedHotel}/>

      {
	  selectedHotel
          ?<RoomSection selectedHotel={selectedHotel}/>
          :null
      }
    </>
  );
}
