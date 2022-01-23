import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export default function FullDashboardPageWarning({ message }) {
  return (
    <Container>
      <Message variant='body1'>{message}</Message>
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
