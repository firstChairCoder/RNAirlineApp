import type { ThunkAction } from "redux-thunk";
import type { RootAction, RootState } from "@store/rootReducer";
import { buyTicketCall } from "src/api";

export const buy =
  (flightId: string): ThunkAction<void, RootState, unknown, RootAction> =>
  (dispatch) => {
    dispatch({ type: "BUY_TICKET_REQUEST", payload: flightId });

    buyTicketCall(flightId)
      .then((response) => {
        dispatch({
          type: "BUY_TICKET_SUCCESS",
          payload: { reservationId: response.data.reservation_id },
        });
      })
      .catch((error) => console.warn(error));
  };
