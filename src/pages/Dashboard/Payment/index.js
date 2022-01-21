import { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "react-credit-cards";
import InputMask from "react-input-mask";
import "react-credit-cards/es/styles-compiled.css";

import useApi from "../../../hooks/useApi";

import SectionSubtitle from "../../../components/Dashboard/NavigationBar/SectionSubtitle";
import SectionTitle from "../../../components/Dashboard/NavigationBar/SectionTitle";
import Button from "../../../components/Form/Button";

export default function Payment() {
  const [ ticketInfo, setTicketInfo ] = useState(null);
  const [ creditCardInfo, setCreditCardInfo ] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const { ticket } = useApi();

  useEffect(() => {
    const { data } = ticket.getTicketInformations();
    console.log(data);
    setTicketInfo(data);
  }, []);

  const handleInputFocus = (e) => {
    setCreditCardInfo({ 
      ...creditCardInfo,
      focus: e.target.name
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setCreditCardInfo({
      ...creditCardInfo,
      [name]: value
    });
  };

  return (
    <>
      <SectionTitle>Ingresso e pagamento</SectionTitle>
      <SectionSubtitle>Ingresso escolhido</SectionSubtitle>
      <TicketInfo>
        <h3>
          {(ticketInfo?.type === "online")
            ? "Online"
            : ("Presencial" + (ticketInfo?.withHotel ? " + Com Hotel" : ""))
          }
        </h3>
        <p>R$ {ticketInfo?.value}</p>
      </TicketInfo>
      <SectionSubtitle>Pagamento</SectionSubtitle>
      <CreditCardContainer>
        <Cards
          cvc={creditCardInfo.cvc}
          expiry={creditCardInfo.expiry}
          focused={creditCardInfo.focus}
          name={creditCardInfo.name}
          number={creditCardInfo.number}
        />
        <InputsCreditCardContainer>
          <StyledInputMask
            type="tel"
            name="number"
            placeholder="Número do Cartão"
            mask="9999 9999 9999 9999"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <StyledInputMask
            type="text"
            name="name"
            placeholder="Nome"
            maxLength={26}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <RowInputsCreditCard>
            <StyledInputMask
              type="tel"
              name="expiry"
              placeholder="Validade"
              mask="99/99"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            <StyledInputMask
              type="tel"
              name="cvc"
              placeholder="CVC"
              maxLength={4}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </RowInputsCreditCard>
        </InputsCreditCardContainer>
      </CreditCardContainer>
    </>);
}

const StyledInputMask = styled(InputMask)`
  border-radius: 5px;
  padding-left: 15px;
  font-size: 20px;
  outline: none;
  border: solid 1px #C3C3C3;

  @media (max-width: 770px) {
    font-size: 15px;
  }
`;

const RowInputsCreditCard = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  input {
    width: 65%;
  }

  & > input:last-child {
    width: 30%;
  }
`;

const InputsCreditCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  padding: 5px;

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }

  input {
    height: 100%;
  }

  @media (max-width: 770px) {
    margin-left: 0px;
  }
`;

const CreditCardContainer = styled.div`
  display: flex;
  max-width: 700px;

  @media (max-width: 770px) {
    flex-direction: column;
    max-width: 400px;

    & > div:last-child {
      margin-top: 20px;
    }
  }
`;

const TicketInfo = styled.div`
  background-color: #FFEED2;
  border-radius: 20px;
  width: 290px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 10px;
    color: #898989;
    font-size: 14px;
  }
`;
