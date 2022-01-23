import styled from "styled-components";
import { Typography } from "@material-ui/core";

export default function DashboardPageTitle({ children }) {
  return <TytleStyle variant='h4'>{children}</TytleStyle>;
}
  
const TytleStyle = styled(Typography)`
  margin-bottom: 20px!important;
`;
