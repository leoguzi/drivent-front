import { RoomCardsStyle, VacancyAvailable, OccupiedVacancy } from "./Styles";

export default function RoomCard({ room, selectedRoom, setSelectedRoom }) {
  const disabled = room.vacancies - room.reservations === 0;
  const selected = selectedRoom === room;
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
        setSelectedRoom(room);
      } else {
        setSelectedRoom(null);
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
        {vacancies().map((vacancyAvailability, indice) => {
          if (vacancyAvailability) return <VacancyAvailable />;
          else
            return (
              <OccupiedVacancy
                selected={selected && indice === nextOcuppancy}
              />
            );
        })}
      </div>
    </RoomCardsStyle>
  );
}
