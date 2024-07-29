/* eslint-disable no-shadow */
type Error = {
    name: string,
    stack?: string,
    message: string,
    statusCode: number,
}

export enum HttpStatus {
    OK = 200,
    CREATED = 201,

    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,

    INTERNAL_SERVER_ERROR = 500,
  }
export default Error;
