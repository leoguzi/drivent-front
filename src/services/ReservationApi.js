import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ReservationApi extends AuthenticatedApi {
  constructor() {
    super();
    this.baseRoute = "/reservation";
  }

  save(body) {
    return api.post(this.baseRoute, body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getUserReservation() {
    return api.get(this.baseRoute, {
      headers: { ...this.getAuthorizationHeader() },
    });
  }
}
