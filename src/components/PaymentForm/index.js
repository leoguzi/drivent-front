import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

import SelectTicket from "./TicketSelection";
import Payment from "./Payment";
import DashboardSlideLeftTransition from "../Dashboard/DashboardSlideLeftTransition";
import useApi from "../../hooks/useApi";

export default function PaymentForm() {
  const [isReserved, setIsReserved] = useState(null);
  const [ticketInfo, setTicketInfo] = useState(false);

  const { ticket } = useApi();

  useEffect(async() => {
    ticket.getTicketInformation().then((response) => {
      const { data: ticketInfo } = response;
      setTicketInfo(ticketInfo);
      if (ticketInfo) setIsReserved(true);
    });
  }, []);

  return (
    <AnimatePresence>
      {isReserved
        ? (
          <DashboardSlideLeftTransition auxKey={1}>
            <Payment ticketInfo={ticketInfo}/>
          </DashboardSlideLeftTransition>
        )
        : (
          <DashboardSlideLeftTransition auxKey={0}>
            <SelectTicket setIsReserved={setIsReserved} />
          </DashboardSlideLeftTransition>
        )
      }
    </AnimatePresence>
  );
}
