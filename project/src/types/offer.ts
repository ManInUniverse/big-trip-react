import { TravelType } from '../const';

export type Offer = {
  id: number;
  title: string;
  price: number;
}

export type Offers = Offer[];

export type OffersByType = Array<{ type: TravelType; offers: Offers }>
