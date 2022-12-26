export enum FilterMode {
  Everything = 'everything',
  Future = 'future',
  Past = 'past',
}

export enum SortingMode {
  Day = 'sort-day',
  Time = 'sort-time',
  Price = 'sort-price',
}

export enum EventCardMode {
  Default = 'default',
  Edit = 'edit',
}

export enum TravelType {
  Taxi = 'taxi',
  Bus = 'bus',
  Train = 'train',
  Ship = 'ship',
  Drive = 'drive',
  Flight = 'flight',
  CheckIn = 'check-in',
  Sightseeing = 'sightseeing',
  Restaurant = 'restaurant',
}

export enum HTTPError {
  Unauthorized = 401,
  NotFound = 404,
}

export enum APIRoute {
  Points = '/points',
  Destinations = '/destinations',
  Offers = '/offers',
}
