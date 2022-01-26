import httpStatus from "http-status";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import useApi from "../hooks/useApi";
import UserContext from "./UserContext";

const ReservationContext = createContext();
export default ReservationContext;

export function ReservationProvider({ children }) {
  const { userData } = useContext(UserContext);
  const [reservationInfo, setReservationInfo] = useState(null);
  const [enrollmentInfo, setEnrollmentInfo] = useState(null);
  const [roomInfo, setRoomInfo] = useState(null);
  const [confirmedReservation, setConfirmedReservation] = useState(null);
  const [update, setUpdate] = useState(false);

  const { enrollment, reservation } = useApi();

  // Atualiza os dados de cadastro e de reserva quando o usuário faz login
  // ou quando a variável de controle update é alterada
  useEffect(() => {
    if (!enrollmentInfo?.id) {
      enrollment
        .getPersonalInformations()
        .then((resp) => setEnrollmentInfo(resp.data))
        .catch((err) => console.error(err));
    }

    reservation
      .getUserReservation()
      .then((resp) => setConfirmedReservation(resp.data))
      .catch((err) => {
        if (err.response.status === httpStatus.NOT_FOUND)
          setConfirmedReservation(false);
      });
  }, [update, userData.token]);

  //Atualiza os dados da reserva sempre que o enrollment é alterado
  useEffect(() => {
    setReservationInfo({
      ...reservationInfo,
      enrollmentId: enrollmentInfo?.id,
    });
  }, [enrollmentInfo]);

  //Atualiza os dados da reserva sempre que o room é alterado
  useEffect(() => {
    setReservationInfo({
      ...reservationInfo,
      roomId: roomInfo?.id,
    });
  }, [roomInfo]);

  return (
    <ReservationContext.Provider
      value={{
        reservationInfo,
        setReservationInfo,
        enrollmentInfo,
        setEnrollmentInfo,
        roomInfo,
        setRoomInfo,
        confirmedReservation,
        setConfirmedReservation,
        update,
        setUpdate,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
