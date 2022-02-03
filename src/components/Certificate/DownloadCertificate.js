import Button from "../Form/Button";
import DashboardPageSubtitle from "../Dashboard/DashboardPageSubtitle";
import styled from "styled-components";

export default function DownloadCertificate({ certificateLink }) {
  return (<>
    <DashboardPageSubtitle>Seu certificado já está disponível:</DashboardPageSubtitle>
    <DownloadButton
      onClick={() => window.open(certificateLink)}
    >
      Abrir PDF
    </DownloadButton>
  </>);
}

const DownloadButton = styled(Button)`
    width: 200px;
    margin-top: 20px !important;
`;
