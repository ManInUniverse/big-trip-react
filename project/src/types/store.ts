import { store } from '../store/store';
import { Destinations } from './destination';
import { OffersByType } from './offer';
import { Points } from './point';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type InitialState = {
  isLoading: boolean;
  destinations: Destinations;
  offersByType: OffersByType;
  points: Points;
};
