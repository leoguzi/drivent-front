import "react-credit-cards/es/styles-compiled.css";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import useApi from "../../hooks/useApi";
import DashboardPageSubtitle from "../Dashboard/DashboardPageSubtitle";
import ConfirmButton from "../Dashboard/NavigationBar/ConfirmButton";
import CreditCard from "./CreditCard";
import ConfirmationPayment from "./ConfirmationPayment";

export default function Payment({ ticketInfo, setIsConfirmed }) {
  const [isLoading, setIsLoading] = useState(false);
  const [creditCardInfo, setCreditCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    issuer: "",
  });

  const { ticket } = useApi();

  const isValidCreditCard = () => {
    if (creditCardInfo.issuer === "unknown")
      return toast.error("Número do cartão inválido");
    
    if (creditCardInfo.name.length < 3)
      return toast.error("Nome inválido");
    
    if (creditCardInfo.cvc.length < 3)
      return toast.error("CVC inválido");

    if (creditCardInfo.expiry.replace(/\D/g, "").length < 4 ||
      dayjs(creditCardInfo.expiry, "MM/YY").isBefore(dayjs())) {
      return toast.error("Validade incorreta");
    }

    return true;
  };

  const onSubmitPayment = () => {
    if (isValidCreditCard() !== true) return;

    setIsLoading(true);
    
    ticket.pay().then(() => {
      toast.success("Pagamento realizado com sucesso!");
      setIsConfirmed(true);
    }).catch((error) => {
      if (error.response?.data?.details) {
        error.response.data.details.forEach((detail) => {
          toast.error(detail);
        });
      } else {
        toast.error("Não foi possível realizar o pagamento");
      }
    }).finally(() => setIsLoading(false));
  };

  return (
    <PaymentContainer>
      <DashboardPageSubtitle>Ingresso escolhido</DashboardPageSubtitle>
      <TicketInfo>
        <h3>
          {(ticketInfo.type === "online")
            ? "Online"
            : ("Presencial" + (ticketInfo.withHotel ? " + Com Hotel" : ""))
          }
        </h3>
        <p>R$ {ticketInfo?.value}</p>
      </TicketInfo>
      <DashboardPageSubtitle>Pagamento</DashboardPageSubtitle>
      {
        (!ticketInfo?.paymentDate)
          ? <>
            <CreditCard
              creditCardInfo={creditCardInfo}
              setCreditCardInfo={setCreditCardInfo}
              onSubmitPayment={onSubmitPayment}
            />
            <ConfirmButton
              onClick={onSubmitPayment}
              isLoading={isLoading}
            >
                Finalizar Pagamento
            </ConfirmButton>
          </>
          : <ConfirmationPayment />
      }
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div`
  animation: slideInLeft .75s;
`;

const TicketInfo = styled.div`
  background-color: #FFEED2;
  border-radius: 20px;
  max-width: 290px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p {
    margin-top: 10px;
    color: #898989;
    font-size: 14px;
  }
`;
