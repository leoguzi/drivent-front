import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

import Button from "../../Form/Button";

export default function ConfirmButton({ isLoading = false, children, ...props }) {
  return (
    <StyledButton {...props} disabled={isLoading}>
      {isLoading 
        ? <CircularProgress color="secondary" size={28} disableShrink />
        : children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  width: 200px;
  height: 40px;
  margin-top: 35px !important;
`;
