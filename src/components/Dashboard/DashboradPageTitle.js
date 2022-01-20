import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export default function DashboradPageTitle({ children }) {
  return <TitleStyle variant="h4">{children}</TitleStyle>;
}

const TitleStyle = styled(Typography)`
	margin-bottom: 20px !important;
`;
