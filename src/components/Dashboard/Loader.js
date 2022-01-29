import Loader from "react-loader-spinner";
import styled from "styled-components";

export default function DashboardLoader() {
  return( <LoaderContainer>
    <Loader color="#124090" height={100} width={100} type="BallTriangle" />
  </LoaderContainer>);
}

const LoaderContainer = styled.div`
margin: auto;
`;

