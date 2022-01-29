import { BiLogIn, BiXCircle, BiCheckCircle } from "react-icons/bi";
import styled from "styled-components";

export const ActivityCardContainer = styled.div`
	background-color: ${({ isSubscribed }) => isSubscribed? "#D0FFDB" : "#f1f1f1"};
	padding: 12px;
	border-radius: 5px;
	height: ${({ $height }) => $height}px;
	font-size: 12px;
	color: #343434;
	display: flex;
	justify-content: space-between;
`;

export const ActivityInfoContainer = styled.div`
	width: 70%;

	> p {
		font-weight: bold;
		margin-bottom: 6px;
	}
`;

export const ColumnActivities = styled.div`
	border: 1px solid #d7d7d7;
	height: 100%;
	padding: 10px;
	width: 288px;

	& > *:not(:last-child) {
		margin-bottom: 10px;
	}
`;

export const TitleColumnActivities = styled.h2`
	font-size: 17px;
	margin-bottom: 13px;
	color: #7b7b7b;
	text-align: center;
`;

export const ContainerColumnActivities = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 60px;
`;

export const SubscribeFieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #cfcfcf;
	width: 30%;
	color: ${({ forbidden }) =>
    forbidden ? "red":"green"};
`;

export const SubscribeIcon = styled(BiLogIn)`
	font-size: 24px;
	color: green;
`;

export const SoldOutIcon = styled(BiXCircle)`
	font-size: 24px;
	color: red;
`;

export const SubscribedIcon = styled(BiCheckCircle)`
	font-size: 24px;
	color: #078632;
`;
