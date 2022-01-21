import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class HotelApi extends AuthenticatedApi {
  constructor() {
    super();
    this.baseRoute = "/hotels";
  }

  getAllHotels() {
    return api.get(this.baseRoute, { headers: this.getAuthorizationHeader() } );
  }
}
