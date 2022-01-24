import styled from "styled-components";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import { HotelCardStyle } from "../Hotel/Styles";

export const RoomCardsContainerStyle = styled.div`
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;

    >div:not(:last-child){
        margin-right: 1rem;
    }
`;

export const RoomCardsStyle = styled.div`
    width: 190px;
    height: 45px;
    border: 1px solid #cecece;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 11px 16px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;

    display: flex;
    justify-content: space-between;

    background: ${(props) => (props.disabled ? "#e9e9e9" : "none")};
    color: ${(props) => (props.disabled ? "#8C8C8C" : "none")};

    background: ${(props) => (props.selected ? "#FFEED2" : "none")};

    cursor: ${({ disabled }) => (disabled ? "initial" : "pointer")};
`;

export const OccupiedVacancy = styled(IoPerson)`
    color: ${(props) => (props.selected ? "#FF4791" : "none")};
`;

export const VacancyAvailable = styled(IoPersonOutline)``;

export const ReservedRoomCardStyle = styled(HotelCardStyle)`
    cursor: initial;
`;
