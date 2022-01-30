import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useState } from "react";
import { ActivityCardContainer, ActivityInfoContainer } from "./Styles";
import SubscribeField from "./SubscribeField";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Sao_Paulo");

export default function ActivityCard({ activity, getActivityCardHeight }) {
  const { id, name, startDate, endDate, availableVacancies } = activity;
  const [isSubscribed, setIsSubscribed] = useState(activity.isSubscribed);

  return (
    <ActivityCardContainer
      $height={() => getActivityCardHeight(startDate, endDate)}
      isSubscribed = {isSubscribed}
    >
      <ActivityInfoContainer>
        <p>{name}</p>
        <span>
          {dayjs(startDate).format("HH:mm") +
        " - " +
        dayjs(endDate).format("HH:mm")}
        </span>
      </ActivityInfoContainer>

      <SubscribeField
        activityId={id}
        availableVacancies={availableVacancies}
        isSubscribed={isSubscribed}
        setIsSubscribed={setIsSubscribed}
      />
    </ActivityCardContainer>
  );
}
