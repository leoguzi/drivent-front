import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class HotelApi extends AuthenticatedApi {
  getHotelRooms(hotelId) {
    return api.get(`hotels/${hotelId}/rooms`, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
