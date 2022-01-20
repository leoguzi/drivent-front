import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

export default function SectionContainer({ title, children }) {
  return (
    <SectionContainerStyle>
      {
        title
          ? <TitleStyle variant='h5'>{title}</TitleStyle>
          : null
      }
	  {children}
    </SectionContainerStyle>
  );
}

const SectionContainerStyle = styled(Container)`
	margin-bottom: 2.5rem;
`;

const TitleStyle = styled(Typography)`
	color: #8E8E8E;
	margin-bottom: 1rem !important;
`;
