import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class TicketApi extends AuthenticatedApi {
  save(body) {
    return api.post("/tickets", body, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getTicketInformations() {
    return {
      status: 200,
      data: {
        id: 1,
        enrollmentId: 1,
        type: "presential",
        withHotel: true,
        value: 600,
        paymentDate: null,
      },
    };

    // eslint-disable-next-line no-unreachable
    return api.get("/tickets", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
