import { useContext } from "react";
import ReservationContext from "../../../contexts/ReservationContext";
import { RoomCardsStyle, VacancyAvailable, OccupiedVacancy } from "./Styles";

export default function RoomCard({ room }) {
  const { roomInfo, setRoomInfo } = useContext(ReservationContext);

  const disabled = room.vacancies - room.reservations === 0;
  const selected = roomInfo === room;
  const nextOcuppancy = room.vacancies - room.reservations - 1;

  function vacancies() {
    const vacancyAvailability = [];

    let vacanciesAvailable = room.vacancies - room.reservations;
    if (selected) vacanciesAvailable--;

    for (let i = 0; i < room.vacancies; i++) {
      if (vacanciesAvailable) {
        vacancyAvailability.push(1);
        vacanciesAvailable--;
      } else {
        vacancyAvailability.push(0);
      }
    }
    return vacancyAvailability;
  }

  function handleSelectRoom() {
    if (!disabled) {
      if (!selected) {
        setRoomInfo(room);
      } else {
        setRoomInfo(null);
      }
    }
  }

  return (
    <RoomCardsStyle
      disabled={disabled}
      selected={selected}
      onClick={handleSelectRoom}
    >
      <div>{room.name}</div>
      <div>
        {vacancies().map((vacancyAvailability, index) => {
          if (vacancyAvailability) return <VacancyAvailable />;
          
          return (
            <OccupiedVacancy
              selected={selected && index === nextOcuppancy}
              key={index}
            />
          );
        })}
      </div>
    </RoomCardsStyle>
  );
}
