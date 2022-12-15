import { TRAVEL_TYPES } from '../const';

export type Offer = {
  id: number;
  title: string;
  price: number;
}

export type Offers = Offer[];

export type OffersByType = Array<{ type: typeof TRAVEL_TYPES[number]; offers: Offers }>
