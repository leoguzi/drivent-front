import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useRef } from "react";
import {
  ActivityCard,
  ActivityInfoContainer,
  ColumnActivities,
  ContainerColumnActivities,
  EmptyCard,
  TitleColumnActivities,
} from "./Styles";
import SubscribeField from "./SubscribeField";

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

  const getActivityCardHeight = (startDate, endDate) => {
    lastActivityCardEndDate.current = endDate;

    return dayjs(endDate).diff(startDate, "hours", true) * 80;
  };

  return (
    <ContainerColumnActivities>
      <TitleColumnActivities>{title}</TitleColumnActivities>
      <ColumnActivities>
        {activitiesByDate[selectedDay][location]
          .sort((a, b) => dayjs(a.startDate) - dayjs(b.startDate))
          .map(({ id, name, startDate, endDate, availableVacancies }, index) => {
            if (index === 0) {
              lastActivityCardEndDate.current = dayjs(startDate).hour(9).minute(0).format();
            }
            return (
              <div key={id}>
                {dayjs(startDate).isAfter(lastActivityCardEndDate.current) &&
                  <EmptyCard
                    $height={() => getActivityCardHeight(lastActivityCardEndDate.current, startDate)}
                  />
                }
                <ActivityCard
                  $height={() => getActivityCardHeight(startDate, endDate)}
                >
                  <ActivityInfoContainer>
                    <p>{name}</p>
                    <span>
                      {dayjs(startDate).format("HH:mm") +
                    " - " +
                    dayjs(endDate).format("HH:mm")}
                    </span>
                  </ActivityInfoContainer>
                  <SubscribeField availableVacancies={availableVacancies} />
                </ActivityCard>
              </div>
            );
          })}
      </ColumnActivities>
    </ContainerColumnActivities>
  );
}
