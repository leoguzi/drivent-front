import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import useApi from "../hooks/useApi";

const ReservationContext = createContext();
export default ReservationContext;

export function ReservationProvider({ children }) {
  const [reservationInfo, setReservationInfo] = useState(null);
  const [enrollmentInfo, setEnrollmentInfo] = useState(null);
  const [roomInfo, setRoomInfo] = useState(null);

  const { enrollment } = useApi();

  useEffect(() => {
    if (!enrollmentInfo) {
      enrollment
        .getPersonalInformations()
        .then((resp) => setEnrollmentInfo(resp.data))
        .catch((err) => console.log(err));
    }
  }, []);

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

  return (
    <ReservationContext.Provider
      value={{
        reservationInfo,
        setReservationInfo,
        enrollmentInfo,
        setEnrollmentInfo,
        roomInfo,
        setRoomInfo,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
