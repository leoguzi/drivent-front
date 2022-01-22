import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ReservationApi extends AuthenticatedApi {
  save(body) {
    return api.post("/reservation", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
