import { useEffect, useState } from "react";
import styled from "styled-components";

import DownloadCertificate from "../../../components/Certificate/DownloadCertificate";
import DashboardPageTitle from "../../../components/Dashboard/DashboardPageTitle";
import DashboardWarning from "../../../components/Dashboard/DashboardWarning";
import DashboardLoader from "../../../components/Dashboard/Loader";
import useApi from "../../../hooks/useApi";

export default function Certificate({ ensureEventIsFinished }) {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [certificateLink, setCertificateLink] = useState(null);

  const { certificate } = useApi();

  useEffect(() => {
    certificate.getCertificate()
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf");
        document.body.appendChild(link);
        setCertificateLink(link);
      })
      .catch(() => {
        setErrorMessage("Não foi possível obter seu certificado");
      }).finally(setIsLoading(false));
  }, []);

  return (
    <Container>
      <DashboardPageTitle>Baixe seu certificado</DashboardPageTitle>
      {isLoading ?
        <DashboardLoader /> :
        ((ensureEventIsFinished().check()) ?
          (!errorMessage ?
            <DownloadCertificate certificateLink={certificateLink} /> : 
            <DashboardWarning>{errorMessage}</DashboardWarning>) :
          <DashboardWarning>{ensureEventIsFinished().message}</DashboardWarning>
        )
      }
    </Container>
  );
}
  
const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
