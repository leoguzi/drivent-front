import { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "react-credit-cards";
import InputMask from "react-input-mask";
import "react-credit-cards/es/styles-compiled.css";

import useApi from "../../../hooks/useApi";

import SectionSubtitle from "../../../components/Dashboard/NavigationBar/SectionSubtitle";
import SectionTitle from "../../../components/Dashboard/NavigationBar/SectionTitle";
import Button from "../../../components/Form/Button";
import { toast } from "react-toastify";

export default function Payment() {
  const [ ticketInfo, setTicketInfo ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
    setTicketInfo(data);
  }, []);

  const handleInputFocusCreditCard = (e) => {
    setCreditCardInfo({ 
      ...creditCardInfo,
      focus: e.target.name
    });
  };

  const handleInputChangeCreditCard = (e) => {
    const { name, value } = e.target;
    
    setCreditCardInfo({
      ...creditCardInfo,
      [name]: value
    });
  };

  const onSubmitPayment = () => {
    const ticketInfoData = {
      enrollmentId: 1,
      type: "presential",
      withHotel: true,
      value: 600,
      //paymentDate: null,
    };

    setIsLoading(true);
    
    ticket.save(ticketInfoData).then(() => {
      toast("Pagamento realizado com sucesso!");
    }).catch((error) => {
      if (error.response?.data?.details) {
        error.response.data.details.forEach((detail) => {
          toast(detail);
        });
      } else {
        toast("Não foi possível realizar o pagamento");
      }
      /* eslint-disable-next-line no-console */
      console.log(error);
    }).finally(() => setIsLoading(false));
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
            onChange={handleInputChangeCreditCard}
            onFocus={handleInputFocusCreditCard}
            required
          />
          <StyledInputMask
            type="text"
            name="name"
            placeholder="Nome"
            maxLength={26}
            onChange={handleInputChangeCreditCard}
            onFocus={handleInputFocusCreditCard}
            required
          />
          <RowInputsCreditCard>
            <StyledInputMask
              type="tel"
              name="expiry"
              placeholder="Validade"
              mask="99/99"
              onChange={handleInputChangeCreditCard}
              onFocus={handleInputFocusCreditCard}
              required
            />
            <StyledInputMask
              type="tel"
              name="cvc"
              placeholder="CVC"
              maxLength={4}
              onChange={handleInputChangeCreditCard}
              onFocus={handleInputFocusCreditCard}
              required
            />
          </RowInputsCreditCard>
        </InputsCreditCardContainer>
      </CreditCardContainer>
      <Button
        onClick={onSubmitPayment}
        disabled={isLoading}
      >Finalizar Pagamento</Button>
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
  margin-bottom: 35px;

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
