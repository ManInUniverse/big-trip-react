import { Destinations } from '../types/destination';
import { OffersByType } from '../types/offer';
import { Points } from '../types/point';
import { State } from '../types/store';

export const getLoadingStatus = (state: State): boolean => state.isLoading;

export const getDestinations = (state: State): Destinations => state.destinations;

export const getOffersByType = (state: State): OffersByType => state.offersByType;

export const getPoints = (state: State): Points => state.points;
