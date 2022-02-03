import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import TicketApi from "../services/TicketApi";
import HotelApi from "../services/HotelsApi";
import ReservationApi from "../services/ReservationApi";
import ActivitiesApi from "../services/ActivitiesApi";
import CertificateApi from "../services/CertificateApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    ticket: new TicketApi(),
    hotel: new HotelApi(),
    reservation: new ReservationApi(),
    activities: new ActivitiesApi(),
    certificate: new CertificateApi(),
  };
}
