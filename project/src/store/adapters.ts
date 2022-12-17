import { NewPoint, NewPointToServer, Point, PointFromServer } from '../types/point';

export const adaptPointToClient = (pointFromServer: PointFromServer): Point => {
  const adaptedPoint: Point & {
    base_price?: PointFromServer['base_price'];
    date_from?: PointFromServer['date_from'];
    date_to?: PointFromServer['date_to'];
    is_favorite?: PointFromServer['is_favorite'];
  } = {
    ...pointFromServer,
    basePrice: pointFromServer['base_price'],
    dateFrom: pointFromServer['date_from'],
    dateTo: pointFromServer['date_to'],
    isFavorite: pointFromServer['is_favorite'],
  };

  delete adaptedPoint.base_price;
  delete adaptedPoint.date_from;
  delete adaptedPoint.date_to;
  delete adaptedPoint.is_favorite;

  return adaptedPoint;
};

export const adaptNewPointToServer = (newPoint: NewPoint): NewPointToServer => {
  const adaptedPoint: NewPointToServer & {
    basePrice?: NewPoint['basePrice'];
    dateFrom?: NewPoint['dateFrom'];
    dateTo?: NewPoint['dateTo'];
    isFavorite?: NewPoint['isFavorite'];
  } = {
    ...newPoint,
    'base_price': newPoint.basePrice,
    'date_from': newPoint.dateFrom,
    'date_to': newPoint.dateTo,
    'is_favorite': newPoint.isFavorite
  };

  delete adaptedPoint.basePrice;
  delete adaptedPoint.dateFrom;
  delete adaptedPoint.dateTo;
  delete adaptedPoint.isFavorite;

  return adaptedPoint;
};
