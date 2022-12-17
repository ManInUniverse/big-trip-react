import { useAppSelector } from '../../hooks/useAppSelector';
import { getDestinations, getOffersByType } from '../../store/selectors';
import { Point } from '../../types/point';
import { formatDateTime, getDestinationNameById, getPointDuration, getSelectedOffers } from '../../utils';

type EventCardProps = {
  point: Point;
}

function EventCard(props: EventCardProps): JSX.Element {
  const destinations = useAppSelector(getDestinations);
  const offersByType = useAppSelector(getOffersByType);

  return (
    <li className="trip-events__item">
      <div className="event">
        <time className="event__date" dateTime={ formatDateTime(props.point.dateFrom, 'YYYY-MM-DD') }>{ formatDateTime(props.point.dateFrom, 'MMM DD') }</time>
        <div className="event__type">
          <img className="event__type-icon" width="42" height="42" src={ `img/icons/${ props.point.type }.png` } alt="Event type icon"></img>
        </div>
        <h3 className="event__title">{ `${ props.point.type } ${ getDestinationNameById(destinations, props.point.destination) }` }</h3>
        <div className="event__schedule">
          <p className="event__time">
            <time className="event__start-time" dateTime={ formatDateTime(props.point.dateFrom, 'YYYY-MM-DDTHH:mm') }>{ formatDateTime(props.point.dateFrom, 'H:mm') }</time>
            &mdash;
            <time className="event__end-time" dateTime={ formatDateTime(props.point.dateTo, 'YYYY-MM-DDTHH:mm') }>{ formatDateTime(props.point.dateTo, 'H:mm') }</time>
          </p>
          <p className="event__duration">{ getPointDuration(props.point.dateFrom, props.point.dateTo) }</p>
        </div>
        <p className="event__price">
          &euro;&nbsp;<span className="event__price-value">{ props.point.basePrice }</span>
        </p>
        <h4 className="visually-hidden">Offers:</h4>
        <ul className="event__selected-offers">
          {
            getSelectedOffers(offersByType, props.point.type, props.point.offers).map((selectedOffer) => (
              <li className="event__offer" key={ selectedOffer.id }>
                <span className="event__offer-title">{ selectedOffer.title }</span>
                &nbsp;{ '+' }&euro;&nbsp;
                <span className="event__offer-price">{ selectedOffer.price }</span>
              </li>
            ))
          }
        </ul>
        <button className={ `event__favorite-btn${ props.point.isFavorite ? ' event__favorite-btn--active' : '' }` } type="button">
          <span className="visually-hidden">Add to favorite</span>
          <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  );
}

export default EventCard;
