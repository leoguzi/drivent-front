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

  useEffect(() => {
    if (!enrollmentInfo) {
      enrollment
        .getPersonalInformations()
        .then((resp) => setEnrollmentInfo(resp.data))
        .catch((err) => console.error(err));
    }

    if (confirmedReservation === null) {
      reservation
        .getUserReservation()
        .then((resp) => setConfirmedReservation(resp.data))
        .catch((err) => {
          if (err.response.status === httpStatus.NOT_FOUND)
            setConfirmedReservation(null);
        });
    }
  }, [update, userData]);

  useEffect(() => {
    setReservationInfo({
      ...reservationInfo,
      enrollmentId: enrollmentInfo?.id,
    });
  }, [enrollmentInfo]);

  useEffect(() => {
    setReservationInfo({
      ...reservationInfo,
      roomId: roomInfo?.id,
    });
  }, [roomInfo]);

  useEffect(() => {
    if (confirmedReservation === undefined) {
      reservation
        .getUserReservation()
        .then((resp) => setConfirmedReservation(resp.data))
        .catch((err) => {
          if (err.response.status === httpStatus.NOT_FOUND)
            setConfirmedReservation(null);
        });
    }
  }, [confirmedReservation]);

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
