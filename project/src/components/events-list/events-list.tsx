import { Points } from '../../types/point';
import EventCard from '../event-card/event-card';

type EventsListProps = {
  points: Points;
}

function EventsList(props: EventsListProps): JSX.Element {
  return (
    <ul className="trip-events__list">
      {
        props.points.map((point) => <EventCard point={ point } key={ point.id } />)
      }
    </ul>
  );
}

export default EventsList;
