import EventCard from '../event-card/event-card';

function EventsList(): JSX.Element {
  return (
    <ul className="trip-events__list">

      <EventCard />
    </ul>
  );
}

export default EventsList;
