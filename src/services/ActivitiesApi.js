import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ActivitiesApi extends AuthenticatedApi {
  constructor() {
    super();
    this.baseRoute = "/activities";
  }

  getActivities() {
    return api.get(this.baseRoute, {
      headers: this.getAuthorizationHeader()
    });
  }

  subscribeInAnActivity(activityId) {
    return api.post(`${this.baseRoute}/check-in`, { activityId }, {
      headers: this.getAuthorizationHeader()
    });
  }
}
