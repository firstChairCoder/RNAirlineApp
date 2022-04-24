import type {
  BuyTicketFailAction,
  BuyTicketRequestAction,
  BuyTicketSuccessAction,
} from "./reducer";

export const buyTicketRequest = (flightId: string): BuyTicketRequestAction => {
  return {
    type: "BUY_TICKET_REQUEST",
    payload: flightId,
  };
};

export const buyTicketSuccess = (
  reservationId: string
): BuyTicketSuccessAction => {
  return {
    type: "BUY_TICKET_SUCCESS",
    payload: { reservationId },
  };
};

export const buyTicketFail = (error: string): BuyTicketFailAction => {
  return {
    type: "BUY_TICKET_FAIL",
    payload: {
      error,
    },
  };
};
