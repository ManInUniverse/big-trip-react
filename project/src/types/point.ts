import { TravelType } from '../const';
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
  type: TravelType;
}

export type Points = Point[];

export type NewPoint = Omit<Point, 'id'>;

export type PointFromServer = {
  base_price: number;
  date_from: string;
  date_to: string;
  destination: Destination['id'];
  id: string;
  is_favorite: boolean;
  offers: Array<Offer['id']>;
  type: TravelType;
};

export type PointsFromServer = PointFromServer[];

export type NewPointToServer = Omit<PointFromServer, 'id'>;
