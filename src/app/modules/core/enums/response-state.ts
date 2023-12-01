/**
 * This is a TypeScript file named response-state.ts.
 * It contains an enum definition for ResponseState.
 * ResponseState is used to represent different HTTP response states.
 */

export enum ResponseState {
  "OK" = 200,
  "NotFound" = 404,
  "BadRequest" = 400,
  "InternalServerError" = 500,
}
