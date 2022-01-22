import styled from "styled-components";
import { Typography } from "@material-ui/core";

export default function DashboardPageSubtitle({ children }) {
  return <TytleStyle variant='h5'>{children}</TytleStyle>;
}
  
const TytleStyle = styled(Typography)`
  margin-bottom: 10px!important;
  color: #8e8e8e;

`;
