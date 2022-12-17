import { useState } from 'react';
import { SortingMode } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getLoadingStatus } from '../../store/selectors';
import { Points } from '../../types/point';
import { sortPoints } from '../../utils';
import EventsList from '../events-list/events-list';
import Sorting from '../sorting/sorting';

type TripEventsProps = {
  points: Points;
}

function TripEvents(props: TripEventsProps): JSX.Element {
  const [activeSorting, setActiveSorting] = useState(SortingMode.Day);
  const isLoading = useAppSelector(getLoadingStatus);

  return (
    <section className="trip-events">
      <h2 className="visually-hidden">Trip events</h2>

      {
        isLoading
          ? <p className="trip-events__msg">Loading...</p>
          : <><Sorting activeSorting={ activeSorting } onSortingChange={ setActiveSorting } /><EventsList points={ sortPoints(props.points, activeSorting) } /></>
      }
    </section>
  );
}

export default TripEvents;
