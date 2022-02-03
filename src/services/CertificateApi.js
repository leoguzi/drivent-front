import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class CertificateApi extends AuthenticatedApi {
  constructor() {
    super();
    this.baseRoute = "/certificate";
  }

  getCertificate() {
    return api.get(`${this.baseRoute}/certificate.pdf`, {
      responseType: "arraybuffer",
      headers: {
        ...this.getAuthorizationHeader(),
        "Content-Type": "application/json",
        "Accept": "application/pdf"
      }
    });
  }
}
