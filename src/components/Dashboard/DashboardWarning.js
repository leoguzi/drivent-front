import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export default function FullDashboardPageWarning({ children }) {
  return (
    <Container>
      <Message variant='body1'>{children}</Message>
    </Container>
  );
}

const Container = styled.div`
    margin: auto;
`;

const Message = styled(Typography)`
    font-size: 1.3rem !important;
    text-align: center;
    color: #757575;
`;
