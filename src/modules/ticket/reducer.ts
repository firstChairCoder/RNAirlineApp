import { Alert } from "react-native";
import type { Action } from "redux";
import { t } from "@translations";

export const BUY_TICKET_REQUEST = "BUY_TICKET_REQUEST";
export const BUY_TICKET_SUCCESS = "BUY_TICKET_SUCCESS";
export const BUY_TICKET_FAIL = "BUY_TICKET_FAIL";

export interface TicketState {
  isLoading: boolean;
  error: string | null;
  reservationId: string | null;
}

export interface BuyTicketRequestAction extends Action {
  type: typeof BUY_TICKET_REQUEST;
  payload: string;
}

export interface BuyTicketSuccessAction extends Action {
  type: typeof BUY_TICKET_SUCCESS;
  payload: {
    reservationId: string;
  };
}

export interface BuyTicketFailAction extends Action {
  type: typeof BUY_TICKET_FAIL;
  payload: {
    error: string;
  };
}

export type TicketAction =
  | BuyTicketRequestAction
  | BuyTicketSuccessAction
  | BuyTicketFailAction;

const initialState: TicketState = {
  isLoading: false,
  error: null,
  reservationId: null,
};

export const ticketReducer = (
  state = initialState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case BUY_TICKET_REQUEST: {
      const newState = state;

      newState.isLoading = true;
      newState.error = null;
      newState.reservationId = null;

      return newState;
    }
    case BUY_TICKET_SUCCESS: {
      Alert.alert(
        t.myBooking.successReservation.title,
        t.myBooking.successReservation.message
      );

      const newState = state;

      newState.isLoading = false;
      newState.reservationId = action.payload.reservationId;

      return newState;
    }
    case BUY_TICKET_FAIL: {
      Alert.alert(
        t.myBooking.errorReservation.title,
        t.myBooking.errorReservation.message
      );

      const newState = state;

      newState.isLoading = false;
      newState.error = action.payload.error;

      return newState;
    }
    default: {
      return { ...state };
    }
  }
};
