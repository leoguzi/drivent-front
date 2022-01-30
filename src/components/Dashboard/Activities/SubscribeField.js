import httpStatus from "http-status";
import { useState } from "react";
import { toast } from "react-toastify";
import useApi from "../../../hooks/useApi";
import { 
  SubscribeFieldContainer,
  SubscribeButtonStyle,
  SubscribeIcon,
  SoldOutIcon,
  SubscribedIcon,
} from "./Styles";

export default function SubscribeField({ activityId, availableVacancies, isSubscribed, setIsSubscribed }) {
  const [loading, setLoading] = useState(false);
  const api = useApi();

  function subscribeInAnActivity() {
    setLoading(true);

    api.activities.subscribeInAnActivity(activityId)
      .then(() => setIsSubscribed(true))
      .catch((error) => {
        if(error.response.status === httpStatus.NOT_FOUND
          || error.response.status === httpStatus.CONFLICT) {
          return toast.error(error.response.data.message);
        }
        toast.error("Não foi possível obter as atividades");
      })
      .finally(() => setLoading(false));
  }
  
  return (
    <SubscribeFieldContainer forbidden={!availableVacancies && !isSubscribed}>

      {isSubscribed?
        <SubscribedWarning/>
        : availableVacancies ? (
          <SubscribeButton availableVacancies={availableVacancies} onClick={subscribeInAnActivity} loading={loading}/>
        ) : (
          <SoldOutWarning />
        )}
    </SubscribeFieldContainer>
  );
}

function SubscribeButton({ availableVacancies, onClick, loading }) {
  return (
    <SubscribeButtonStyle onClick={onClick} disabled={loading}>
      <SubscribeIcon />
      <p>{`${availableVacancies} vagas`}</p>
    </SubscribeButtonStyle>
  );
}

function SoldOutWarning() {
  return (
    <>
      <SoldOutIcon />
      <p>Esgotado</p>
    </>
  );
}

function SubscribedWarning() {
  return (
    <>
      <SubscribedIcon />
      <p>Inscrito</p>
    </>
  );
}
