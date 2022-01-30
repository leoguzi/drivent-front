import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useRef } from "react";
import {
  ColumnActivities,
  ContainerColumnActivities,
  EmptyCard,
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
  const lastActivityCardEndDate = useRef();

  const getActivityCardHeight = (startDate, endDate, isEmptyCard = false) => {
    lastActivityCardEndDate.current = endDate;
    const marginBottom = isEmptyCard ? 0 : 10;
    const hourHeightInPixels = 80;

    const durationInHours = dayjs(endDate).diff(startDate, "hours", true);
    const spaceBetweenHours = (Math.floor(durationInHours) - 1) * marginBottom;

    return (durationInHours * hourHeightInPixels) + spaceBetweenHours;
  };

  return (
    <ContainerColumnActivities>
      <TitleColumnActivities>{title}</TitleColumnActivities>
      <ColumnActivities>
        {activitiesByDate[selectedDay][location]
          .sort((a, b) => dayjs(a.startDate) - dayjs(b.startDate))
          .map((activity, index) => {
            if (index === 0) {
              lastActivityCardEndDate.current = dayjs(activity.startDate).hour(9).minute(0);
            }
            return (
              <div key={activity.id}>
                {dayjs(activity.startDate).isAfter(lastActivityCardEndDate.current) &&
                  <EmptyCard
                    $height={() => getActivityCardHeight(lastActivityCardEndDate.current, activity.startDate, true)}
                  />
                }
                <ActivityCard
                  activity={activity}
                  getActivityCardHeight={getActivityCardHeight}
                />
              </div>
            );
          })}
      </ColumnActivities>
    </ContainerColumnActivities>
  );
}
