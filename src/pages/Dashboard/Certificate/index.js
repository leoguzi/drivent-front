import { useEffect, useState } from "react";
import styled from "styled-components";

import DownloadCertificate from "../../../components/Certificate/DownloadCertificate";
import DashboardPageTitle from "../../../components/Dashboard/DashboardPageTitle";
import DashboardWarning from "../../../components/Dashboard/DashboardWarning";
import DashboardLoader from "../../../components/Dashboard/Loader";

export default function Certificate({ ensureEventIsFinished }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(setIsLoading, 2000, false);
  }, []);

  return (
    <Container>
      <DashboardPageTitle>Baixe seu certificado</DashboardPageTitle>
      {!ensureEventIsFinished().check() ?
        <DashboardWarning>{ensureEventIsFinished().message}</DashboardWarning> :
        (isLoading ?
          <DashboardLoader /> :
          <DownloadCertificate />
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
