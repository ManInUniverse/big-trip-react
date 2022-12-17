import { SortingMode } from '../../const';

type SortingProps = {
  activeSorting: SortingMode;
  onSortingChange: (sortingMode: SortingMode) => void;
}

function Sorting(props: SortingProps): JSX.Element {
  return (
    <form className="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div className="trip-sort__item  trip-sort__item--day">
        <input onChange={ () => props.onSortingChange(SortingMode.Day) } id="sort-day" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked={ props.activeSorting === SortingMode.Day } />
        <label className="trip-sort__btn" htmlFor="sort-day">Day</label>
      </div>

      <div className="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled />
        <label className="trip-sort__btn" htmlFor="sort-event">Event</label>
      </div>

      <div className="trip-sort__item  trip-sort__item--time">
        <input onChange={ () => props.onSortingChange(SortingMode.Time) } id="sort-time" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" checked={ props.activeSorting === SortingMode.Time } />
        <label className="trip-sort__btn" htmlFor="sort-time">Time</label>
      </div>

      <div className="trip-sort__item  trip-sort__item--price">
        <input onChange={ () => props.onSortingChange(SortingMode.Price) } id="sort-price" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked={ props.activeSorting === SortingMode.Price } />
        <label className="trip-sort__btn" htmlFor="sort-price">Price</label>
      </div>

      <div className="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled />
        <label className="trip-sort__btn" htmlFor="sort-offer">Offers</label>
      </div>
    </form>
  );
}

export default Sorting;
