import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useRef, useState } from "react";
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
  const lastActivityCard = useRef({
    startDate: "09:00",
    endDate: "09:00",
  });

  const getActivityCardHeight = (startDate, endDate) => {
    return dayjs(endDate).diff(startDate, "hours", true) * 80;
  };

  return (
    <ContainerColumnActivities>
      <TitleColumnActivities>{title}</TitleColumnActivities>
      <ColumnActivities>
        {activitiesByDate[selectedDay][location]
          .sort((a, b) => dayjs(a.startDate) - dayjs(b.startDate))
          .map(({ id, name, startDate, endDate, availableVacancies }, index) => {
            return (
              <>
                {dayjs(startDate).isAfter(dayjs(lastActivityCard.endDate, "HH:mm")) &&
                  <EmptyCard
                    $height={() => getActivityCardHeight(dayjs(lastActivityCard.endDate, "HH:mm"), startDate)}
                  />
                }
                <ActivityCard
                  key={id}
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
              </>
            );
          })}
      </ColumnActivities>
    </ContainerColumnActivities>
  );
}
