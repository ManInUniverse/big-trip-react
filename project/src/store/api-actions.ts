import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/store';
import { Destinations } from '../types/destination';
import { OffersByType } from '../types/offer';
import { NewPoint, Point, Points, PointsFromServer } from '../types/point';
import { APIRoute } from '../const';
import { adaptPointToClient } from './adapters';

type AppThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchDestinationsAction = createAsyncThunk<Destinations, undefined, AppThunkApiConfig>(
  'fetchDestinations',
  async (_arg, { extra: api }) => {
    const response = await api.get<Destinations>(APIRoute.Destinations);
    return response.data;
  }
);

export const fetchOffersByTypeAction = createAsyncThunk<OffersByType, undefined, AppThunkApiConfig>(
  'fetchOffersByType',
  async (_arg, { extra: api }) => {
    const response = await api.get<OffersByType>(APIRoute.Offers);
    return response.data;
  }
);

export const fetchPointsAction = createAsyncThunk<Points, undefined, AppThunkApiConfig>(
  'fetchPoints',
  async (_arg, { extra: api }) => {
    const response = await api.get<PointsFromServer>(APIRoute.Points);
    return response.data.map(adaptPointToClient);
  }
);

export const createNewPointAction = createAsyncThunk<Point, NewPoint, AppThunkApiConfig>(
  'createNewPoint',
  async (_arg, { extra: api }) => {
    const response = await api.post<Point>(APIRoute.Points);
    return response.data;
  }
);

export const editPointAction = createAsyncThunk<Point, Point, AppThunkApiConfig>(
  'editPoint',
  async (point, { extra: api }) => {
    const response = await api.put<Point>(`${ APIRoute.Points }/${ point.id }`);
    return response.data;
  }
);

export const deletePointAction = createAsyncThunk<void, Point, AppThunkApiConfig>(
  'deletePoint',
  async (point, { extra: api }) => {
    await api.delete(`${ APIRoute.Points }/${ point.id }`);
  }
);
