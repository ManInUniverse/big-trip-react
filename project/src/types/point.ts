import { TRAVEL_TYPES } from '../const';
import { Destination } from './destination';
import { Offer } from './offer';

export type Point = {
  basePrice: number;
  dateFrom: string;
  dateTo: string;
  destination: Destination['id'];
  id: string;
  isFavorite: boolean;
  offers: Array<Offer['id']>;
  type: typeof TRAVEL_TYPES[number];
}

export type LocalPoint = Omit<Point, 'id'>;
