import { FilterMode } from '../../const';

type FilterProps = {
  activeFilter: FilterMode;
  onFilterChange: (filterMode: FilterMode) => void;
}

function Filter(props: FilterProps): JSX.Element {
  return (
    <form className="trip-filters" action="#" method="get">
      <div className="trip-filters__filter">
        <input onChange={ () => props.onFilterChange(FilterMode.Everything) } id="filter-everything" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked={ props.activeFilter === FilterMode.Everything } />
        <label className="trip-filters__filter-label" htmlFor="filter-everything">Everything</label>
      </div>

      <div className="trip-filters__filter">
        <input onChange={ () => props.onFilterChange(FilterMode.Future) } id="filter-future" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" checked={ props.activeFilter === FilterMode.Future } />
        <label className="trip-filters__filter-label" htmlFor="filter-future">Future</label>
      </div>

      <div className="trip-filters__filter">
        <input onChange={ () => props.onFilterChange(FilterMode.Past) } id="filter-past" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked={ props.activeFilter === FilterMode.Past } />
        <label className="trip-filters__filter-label" htmlFor="filter-past">Past</label>
      </div>

      <button className="visually-hidden" type="submit">Accept filter</button>
    </form>
  );
}

export default Filter;
