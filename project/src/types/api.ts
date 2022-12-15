import { HTTPError } from '../const';

export type Error = {
  error: HTTPError;
  message: string;
}
