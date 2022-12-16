export const TRAVEL_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
] as const;

export enum HTTPError {
  Unauthorized = 401,
  NotFound = 404,
}

export enum APIRoute {
  Points = '/points',
  Destinations = '/destinations',
  Offers = '/offers',
}
