import { RoomCardsStyle, VacancyAvailable, OccupiedVacancy } from "./Styles";

export default function RoomCard({ room }) {
  function vacancies() {
    let vacanciesAvailable = room.vacancies - room.reservations;

    const vacancyAvailability = [];
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

  return (
    <RoomCardsStyle>
      <div>{room.name}</div>
      <div>
        {vacancies().map((vacancyAvailability) => {
          if (vacancyAvailability) return <VacancyAvailable />;
          else return <OccupiedVacancy />;
        })}
      </div>
    </RoomCardsStyle>
  );
}
