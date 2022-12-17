import dayjs from 'dayjs';
import { FilterMode, SortingMode } from './const';
import { Destinations } from './types/destination';
import { OffersByType, TravelType } from './types/offer';
import { Point, Points } from './types/point';

enum TimeInMinutes {
  Hour = 60,
  Day = 1440,
}

enum TimeInHours {
  Day = 24,
}

export const sortPoints = (points: Points, sortingMode: SortingMode) => {

  switch(sortingMode) {
    case SortingMode.Day:
      return [...points].sort(sortPointsByDate);

    case SortingMode.Time:
      return [...points].sort(sortPointsByDuration);

    case SortingMode.Price:
      return [...points].sort(sortPointsByPrice);
  }
};

export const filterPoints = (points: Points, filterMode: FilterMode) => {

  switch(filterMode) {
    case FilterMode.Everything:
      return points;

    case FilterMode.Future:
      return points.filter((point) => isPointFuture(point.dateFrom));

    case FilterMode.Past:
      return points.filter((point) => isPointPast(point.dateFrom));
  }
};

export const isPointFuture = (dateFrom: Point['dateFrom']) => dayjs(dateFrom).isAfter(dayjs(), 'D') || dayjs(dateFrom).isSame(dayjs(), 'D');

export const isPointPast = (dateFrom: Point['dateFrom']) => dayjs(dateFrom).isBefore(dayjs(), 'D');

export const formatDateTime = (date: dayjs.ConfigType, format: string) => dayjs(date).format(format);

export const sortPointsByDate = (pointA: Point, pointB: Point) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));

export const sortPointsByPrice = (pointA: Point, pointB: Point) => pointB.basePrice - pointA.basePrice;

export const sortPointsByDuration = (pointA: Point, pointB: Point) => dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom)) - dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));

export const getPointDuration = (dateFrom: Point['dateFrom'], dateTo: Point['dateTo']) => {
  const timeDifference = dayjs(dateTo).diff(dayjs(dateFrom), 'minutes');
  if (timeDifference < TimeInMinutes.Hour) {
    return `${ timeDifference }M`;
  }
  if (timeDifference < TimeInMinutes.Day) {
    const hours = Math.trunc(timeDifference / TimeInMinutes.Hour);
    const minutes = Math.trunc(timeDifference % TimeInMinutes.Hour);
    return `${ hours }H ${ minutes }M`;
  }
  if (timeDifference >= TimeInMinutes.Day) {
    const days = Math.trunc(timeDifference / TimeInMinutes.Day);
    const hours = Math.trunc(Math.trunc(timeDifference / TimeInMinutes.Hour) % TimeInHours.Day);
    const minutes = Math.trunc(timeDifference % TimeInMinutes.Hour);
    return `${ days }D ${ hours }H ${ minutes }M`;
  }
};

export const getDestinationNameById = (
  destinations: Destinations,
  destinationId: Point['destination']
) => {
  const destinationName = destinations.find((destination) => destination.id === destinationId)?.name;
  if (!destinationName) {
    return 'unknown';
  }
  return destinationName;
};

export const getSelectedOffers = (
  offersByType: OffersByType,
  type: TravelType,
  offers: Point['offers']
) => {
  const offersByCurrentType = offersByType.find((element) => element.type === type)?.offers;
  const selectedOffers = offersByCurrentType?.filter((element) => offers.includes(element.id));
  if (!selectedOffers) {
    return [];
  }
  return selectedOffers;
};
