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
          .map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
            />
          ))}
      </ColumnActivities>
    </ContainerColumnActivities>
  );
}
