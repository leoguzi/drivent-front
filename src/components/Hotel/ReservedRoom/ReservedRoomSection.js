
import Button from "../../../Form/Button";
import SectionContainer from "../../SectionContainer";
import ReservedRoom from "./ReservedRoom";

export default function RoomSection({ setChangeRoom }) {
  return (
    <SectionContainer title='Você já escolheu seu quarto'>
      <ReservedRoom/>
      <Button
        children={"TROCAR DE QUARTO"}
        onClick={() => setChangeRoom(true)}
      />
    </SectionContainer>
  );
}
