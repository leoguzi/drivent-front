import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

import SelectTicket from "./TicketSelection";
import Payment from "./Payment";
import DashboardSlideLeftTransition from "../Dashboard/DashboardSlideLeftTransition";
import useApi from "../../hooks/useApi";

export default function PaymentForm() {
  const [isReserved, setIsReserved] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(null);
  const [ticketInfo, setTicketInfo] = useState(false);

  const { ticket } = useApi();

  useEffect(async() => {
    ticket.getTicketInformation().then((response) => {
      const { data: ticketInfo } = response;
      setTicketInfo(ticketInfo);
      if (ticketInfo) setIsReserved(true);
      if (ticketInfo.paymentDate) setIsConfirmed(true);
      console.log(ticketInfo);
    });
  }, [isReserved, isConfirmed]);

  return (
    <AnimatePresence>
      {isReserved
        ? (
          <DashboardSlideLeftTransition auxKey={2}>
            <Payment ticketInfo={ticketInfo} setIsConfirmed={setIsConfirmed} />
          </DashboardSlideLeftTransition>
        )
        : (
          <DashboardSlideLeftTransition auxKey={1}>
            <SelectTicket setIsReserved={setIsReserved} />
          </DashboardSlideLeftTransition>
        )
      }
    </AnimatePresence>
  );
}
