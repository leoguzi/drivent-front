import { SoldOutIcon, SubscribeFieldContainer, SubscribeIcon, SubscribedIcon } from "./Styles";

export default function SubscribeField({ availableVacancies, isSubscribed }) {
  return (
    <SubscribeFieldContainer forbidden={!availableVacancies && !isSubscribed}>

      {isSubscribed?
        <SubscribedWarning/>
        : availableVacancies ? (
          <SubscribeButton availableVacancies={availableVacancies} />
        ) : (
          <SoldOutWarning />
        )}
    </SubscribeFieldContainer>
  );
}

function SubscribeButton({ availableVacancies }) {
  return (
    <>
      <SubscribeIcon />
      <p>{`${availableVacancies} vagas`}</p>
    </>
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
