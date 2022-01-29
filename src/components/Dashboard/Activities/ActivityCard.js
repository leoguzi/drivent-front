import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { ActivityCardContainer, ActivityInfoContainer } from "./Styles";
import SubscribeField from "./SubscribeField";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Sao_Paulo");

export default function ActivityCard({ name, startDate, endDate, availableVacancies }) {
  const marginBottom = 10;

  const getActivityCardHeight = (startDate, endDate) => {
    const hourHeightInPixels = 80;

    const durationInHours = dayjs(endDate).diff(startDate, "hours", true);

    const spaceBetweenHours = (Math.floor(durationInHours) - 1) * marginBottom;

    return durationInHours * hourHeightInPixels + spaceBetweenHours;
  };

  return <ActivityCardContainer
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
  </ActivityCardContainer>;
}
