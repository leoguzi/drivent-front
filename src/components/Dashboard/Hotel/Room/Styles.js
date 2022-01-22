import styled from "styled-components";
import { HiUser, HiOutlineUser } from "react-icons/hi";

export const RoomCardsContainerStyle = styled.div``;
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
`;

export const OccupiedVacancy = styled(HiUser)``;
export const VacancyAvailable = styled(HiOutlineUser)``;
