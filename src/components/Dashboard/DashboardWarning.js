import styled from "styled-components";

export default function DashboardWarning({ children }) {
  return <Warning><p>{ children}</p></Warning>;
}
const Warning = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        text-align: center;
        color: #8e8e8e;
        font-size: 20px;
    }
`;
