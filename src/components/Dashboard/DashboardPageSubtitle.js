import styled from "styled-components";

export default function DashboardPageSubtitle({ children }) {
  return <SubTitleStyle>{children}</SubTitleStyle>;
}
  
const SubTitleStyle = styled.h3`
  margin-bottom: 10px!important;
  font-size: 20px;
  color: #8e8e8e;
`;
