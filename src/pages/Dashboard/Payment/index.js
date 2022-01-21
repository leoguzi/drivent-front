import "react-credit-cards/es/styles-compiled.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import dayjs from "dayjs";

import useApi from "../../../hooks/useApi";

import SectionSubtitle from "../../../components/Dashboard/SectionSubtitle";
import SectionTitle from "../../../components/Dashboard/SectionTitle";
import ConfirmButton from "../../../components/Dashboard/NavigationBar/ConfirmButton";
import CreditCard from "../../../components/Dashboard/Payment/CreditCard";

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
    const { data } = ticket.getTicketInformation();
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

  const isValidCreditCard = () => {
    if (creditCardInfo.number.replace(/\D/g, "").length < 16)
      return toast("Número do cartão inválido"); 
    
    if (creditCardInfo.name.length < 3)
      return toast("Nome inválido");
    
    if (creditCardInfo.cvc.length < 3)
      return toast("CVC inválido");
    
    if (creditCardInfo.expiry.replace(/\D/g, "").length < 4 || !dayjs(creditCardInfo.expiry).isValid()) {
      return toast("Validade incorreta");
    }
    
    return true;
  };

  const onSubmitPayment = () => {
    if (isValidCreditCard() !== true) return;

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
      {!ticketInfo.paymentDate ?
        <CreditCard
          creditCardInfo={creditCardInfo}
          handleInputFocusCreditCard={handleInputFocusCreditCard}
          handleInputChangeCreditCard={handleInputChangeCreditCard}
        /> : ""
      }
      <ConfirmButton
        onClick={onSubmitPayment}
        isLoading={isLoading}
      >
        Finalizar Pagamento
      </ConfirmButton>
    </>);
}

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
