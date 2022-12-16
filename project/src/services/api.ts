import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BASE_URL = 'https://18.ecmascript.pages.academy/big-trip/';
const REQUEST_TIMEOUT = 5000;
const TOKEN = 'Basic slo34rlodir984uj';

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
      }

      throw error;
    }
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = TOKEN;

      if (token && config.headers) {
        config.headers['Authorization'] = token;
      }

      return config;
    }
  );

  return api;
};

export { createAPI };
