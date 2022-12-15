import EventsList from '../events-list/events-list';
import Sorting from '../sorting/sorting';

function TripEvents(): JSX.Element {
  return (
    <section className="trip-events">
      <h2 className="visually-hidden">Trip events</h2>

      <Sorting />

      <EventsList />
    </section>
  );
}

export default TripEvents;
