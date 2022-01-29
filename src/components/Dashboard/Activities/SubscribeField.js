import { SoulOutIcon, SubscribeFieldContainer, SubscribeIcon } from "./Styles";

export default function SubscribeField({ availableVacancies }) {
  return (
    <SubscribeFieldContainer availableVacancies={availableVacancies}>
      {availableVacancies ? (
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
      <SoulOutIcon />
      <p>Esgotado</p>
    </>
  );
}
