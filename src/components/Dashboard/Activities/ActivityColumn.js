import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import {
  ColumnActivities,
  ContainerColumnActivities,
  TitleColumnActivities,
} from "./Styles";
import ActivityCard from "./ActivityCard";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("America/Sao_Paulo");

export default function ActivityColumn({
  activitiesByDate,
  selectedDay,
  title,
  location,
}) {
  return (
    <ContainerColumnActivities>
      <TitleColumnActivities>{title}</TitleColumnActivities>
      <ColumnActivities>
        {activitiesByDate[selectedDay][location]
          .sort((a, b) => dayjs(a.startDate) - dayjs(b.startDate))
          .map(({ id, name, startDate, endDate, availableVacancies, isSubscribed }) => (
            <ActivityCard
              key={id}
              name={name}
              startDate={startDate}
              endDate={endDate}
              availableVacancies={availableVacancies}
              isSubscribed={isSubscribed}
            />
          ))}
      </ColumnActivities>
    </ContainerColumnActivities>
  );
}
