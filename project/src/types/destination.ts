import { Pictures } from './picture';

export type Destination = {
  id: number;
  description: string;
  name: string;
  pictures: Pictures;
}

export type Destinations = Destination[];
