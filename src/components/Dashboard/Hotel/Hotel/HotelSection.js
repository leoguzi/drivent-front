import { useState } from "react";
import SectionContainer from "../../SectionContainer";
import HotelCardsContainer from "./HotelCardsContainer";

export default function HotelSection({ setSelectedHotel }) {
  const [loading, setLoading] = useState(false);

  // mocked data
  const hotelsArray = [
    {
      "id": 1,
      "name": "Driven Palace",
      "image": "https://revistabula.com/wp/wp-content/uploads/2020/07/copacabana-palace.jpg",
      "roomTypes": [
        "Single",
        "Double",
        "Triple"
      ],
      "availableVacancies": 10
    },
    {
      "id": 2,
      "name": "Driven National Hotel",
      "image": "https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/234894/7777d32177f68cb76f382d8295f927e6fachadagranmelianacionalrio1/97,0,533,800/400,600,0.39/0/default.jpg",
      "roomTypes": [
        "Single",
        "Double"
      ],
      "availableVacancies": 6
    }
  ];
      
  return (
    <SectionContainer title='Primeiro, escolha seu hotel'>
      <HotelCardsContainer hotelsArray={hotelsArray}/>
    </SectionContainer>
  );
}
