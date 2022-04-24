/**
 * Fake function for api call
 */
export const buyTicketCall = (
  _flightId: string
): Promise<{ status: number; data: { reservation_id: string } }> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line camelcase
      resolve({ status: 204, data: { reservation_id: "1234" } });
    }, 500);
  });
