import dayjs from "dayjs";
import styled from "styled-components";

export default function ActivityColumn({ activitiesByDate, selectedDay, title, location }) {
  const getActivityCardHeight = (startDate, endDate) => {
    return dayjs(endDate).diff(startDate, "hours", true) * 80;
  };

  return (
    <ContainerColumnActivities>
      <TitleColumnActivities>{title}</TitleColumnActivities>
      <ColumnActivities>
        {activitiesByDate[selectedDay][location].sort((a, b) => dayjs(a.startDate) - dayjs(b.startDate))
          .map(({ id, name, startDate, endDate }) => 
            <ActivityCard key={id} $height={() => getActivityCardHeight(startDate, endDate)}>
              <p>{name}</p>
              <span>{dayjs(startDate).format("HH:mm") + " - " + dayjs(endDate).format("HH:mm")}</span>
            </ActivityCard>
          )}
      </ColumnActivities>
    </ContainerColumnActivities>
  );
}

const ActivityCard = styled.div`
  background-color: #F1F1F1;
  padding: 12px;
  border-radius: 5px;
  height: ${({ $height }) => $height}px ;
  font-size: 12px;
  color: #343434;

  > p {
    font-weight: bold;
    margin-bottom: 6px;
  }
`;

const ColumnActivities = styled.div`
  border: 1px solid #D7D7D7;
  height: 100%;
  padding: 10px;
  width: 288px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const TitleColumnActivities = styled.h2`
  font-size: 17px;
  margin-bottom: 13px;
  color: #7B7B7B;
  text-align: center;
`;

const ContainerColumnActivities = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
