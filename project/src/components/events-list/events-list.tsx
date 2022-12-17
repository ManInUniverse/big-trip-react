import { useState } from 'react';
import { Point, Points } from '../../types/point';
import EventCard from '../event-card/event-card';

type EventsListProps = {
  points: Points;
}

function EventsList(props: EventsListProps): JSX.Element {
  const [activeEventCard, setActiveEventCard] = useState<Point['id'] | null>(null);

  return (
    <ul className="trip-events__list">
      {
        props.points.map((point) =>
          (
            <EventCard
              isEditing={ point.id === activeEventCard }
              onEditButtonClick={ () => setActiveEventCard(point.id) }
              onCloseEditButtonClick= { () => setActiveEventCard(null) }
              point={ point }
              key={ point.id }
            />
          )
        )
      }
    </ul>
  );
}

export default EventsList;
