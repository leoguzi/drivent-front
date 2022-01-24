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
  const [confirmedReservation, setConfirmedReservation] = useState(undefined);

  const { enrollment, reservation } = useApi();

  useEffect(() => {    
    if (userData.token) {
      enrollment
        .getPersonalInformations()
        .then((resp) => setEnrollmentInfo(resp.data))
        .catch((err) => console.log(err));

      reservation
        .getUserReservation()
        .then((resp) => setConfirmedReservation(resp.data))
        .catch((err) => console.log(err));
    }
  }, [userData.token]);

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
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
