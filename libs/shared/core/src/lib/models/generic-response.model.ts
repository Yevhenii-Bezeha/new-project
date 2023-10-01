import { HttpStatusCode } from './http-status-code.enum';

export interface GenericResponseModel<T> {
  headers: NonNullable<unknown>;
  status?: HttpStatusCode;
  url?: string;
  data?: T;
}
