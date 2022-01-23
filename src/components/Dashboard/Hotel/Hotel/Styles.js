import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const HotelCardsContainerStyle = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;

    >div:not(:last-child){
        margin-right: 1rem;
    }

    >div{
        margin-bottom: 1rem;
    }

    p:not(:last-child){
        margin-bottom: 0.5rem;
    }

    ::-webkit-scrollbar {
        height: 0.5rem;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 1rem; 
    }

    ::-webkit-scrollbar-thumb {
        background: #b9b9b9;
        border-radius: 1rem; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;

const HotelCardStyle = styled.div`
    --card-width: 200px;
    --image-ratio: calc(16/9);
    --card-padding: 0.7rem;

    box-sizing:border-box;
    min-width: var(--card-width);
    padding: var(--card-padding);
    background-color:  ${({ isActive }) => isActive? "#f1ddbb" : "#e9e9e9"};
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    >div:first-child{
        height: calc((var(--card-width) - 2 * var(--card-padding))/ var(--image-ratio));
    }
`;

const HotelImageContainer = styled.div`
    background-color: #d3d3d3;
    border-radius: 10px;
    margin-bottom: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const HotelName = styled(Typography)`
    font-size: 1.25rem !important;
    color: #343434;
`;

const InfoData = styled(Typography)`
    font-size: 0.95rem !important;
    color: #505050;
`;

const InfoTitle = styled(InfoData)`
    font-size: 1rem !important;
    font-weight: 700 !important;
`;

const NoContentWarning = styled(Typography)`
    color: #757575;
`; 

export { 
  HotelCardsContainerStyle,
  HotelCardStyle,
  HotelImageContainer,
  HotelName,
  InfoTitle,
  InfoData,
  NoContentWarning,
};
