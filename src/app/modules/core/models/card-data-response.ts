import { CardType } from "./card";
import { ResponseState } from "../enums/response-state";

/**
 * Interface for the response of card data containing an array of Card objects
 * and the status code of the response.
 */
export interface CardDataResponse {
  data: CardType[];
  statusCode: ResponseState;
};
