import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TravelType } from '../../const';
import { Point } from '../../types/point';
import { formatDateTime, getDestinationDescriptionById, getDestinationNameById } from '../../utils';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getDestinations } from '../../store/selectors';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

type EditEventFormProps = {
  point: Point;
  onCloseButtonClick: () => void;
}

function EditEventForm(props: EditEventFormProps): JSX.Element {
  const destinations = useAppSelector(getDestinations);

  const dateFromInputRef = useRef(null);
  const dateToInputRef = useRef(null);

  const dateFromPickerRef = useRef<flatpickr.Instance>();
  const dateToPickerRef = useRef<flatpickr.Instance>();

  useEffect(() => {
    const dateFromInput = dateFromInputRef.current;
    const dateToInput = dateToInputRef.current;

    if (dateFromInput && dateToInput) {
      dateFromPickerRef.current = flatpickr(dateFromInput, {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: props.point.dateFrom,
        onChange: ([userDate]) => setFormData((prev) => ({ ...prev, dateFrom: userDate.toISOString() })),
      });
      dateToPickerRef.current = flatpickr(dateToInput, {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: props.point.dateTo,
        onChange: ([userDate]) => setFormData((prev) => ({ ...prev, dateTo: userDate.toISOString() })),
      });
    }

    return () => {
      dateFromPickerRef.current?.destroy();
      dateToPickerRef.current?.destroy();
    };
  }, [props.point.dateFrom, props.point.dateTo]);

  const [isEventTypeListShown, setIsEventTypeListShown] = useState(false);
  const [formData, setFormData] = useState<Point>({
    basePrice: props.point.basePrice,
    dateFrom: props.point.dateFrom,
    dateTo: props.point.dateTo,
    destination: props.point.destination,
    id: props.point.id,
    isFavorite: props.point.isFavorite,
    offers: props.point.offers,
    type: props.point.type,
  });
  const [destinationInputValue, setDestinationInputValue] = useState(getDestinationNameById(destinations, formData.destination));

  const onDestinationChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const datalist = evt.target.list;

  };

  return (
    <form className="event event--edit" action="#" method="post">
      <header className="event__header">
        <div className="event__type-wrapper">
          <label className="event__type  event__type-btn" htmlFor="event-type-toggle-1">
            <span className="visually-hidden">Choose event type</span>
            <img className="event__type-icon" width="17" height="17" src={ `img/icons/${ formData.type }.png` } alt="Event type icon" />
          </label>
          <input onChange={ () => setIsEventTypeListShown((prev) => !prev) } className="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" checked={ isEventTypeListShown } />

          <div className="event__type-list">
            <fieldset className="event__type-group">
              <legend className="visually-hidden">Event type</legend>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.Taxi }); setIsEventTypeListShown(false); } } id="event-type-taxi-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" checked={ formData.type === TravelType.Taxi } />
                <label className="event__type-label  event__type-label--taxi" htmlFor="event-type-taxi-1">Taxi</label>
              </div>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.Bus }); setIsEventTypeListShown(false); } } id="event-type-bus-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" checked={ formData.type === TravelType.Bus } />
                <label className="event__type-label  event__type-label--bus" htmlFor="event-type-bus-1">Bus</label>
              </div>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.Train }); setIsEventTypeListShown(false); } } id="event-type-train-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="train" checked={ formData.type === TravelType.Train } />
                <label className="event__type-label  event__type-label--train" htmlFor="event-type-train-1">Train</label>
              </div>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.Ship }); setIsEventTypeListShown(false); } } id="event-type-ship-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" checked={ formData.type === TravelType.Ship } />
                <label className="event__type-label  event__type-label--ship" htmlFor="event-type-ship-1">Ship</label>
              </div>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.Drive }); setIsEventTypeListShown(false); } } id="event-type-drive-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" checked={ formData.type === TravelType.Drive } />
                <label className="event__type-label  event__type-label--drive" htmlFor="event-type-drive-1">Drive</label>
              </div>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.Flight }); setIsEventTypeListShown(false); } } id="event-type-flight-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked={ formData.type === TravelType.Flight } />
                <label className="event__type-label  event__type-label--flight" htmlFor="event-type-flight-1">Flight</label>
              </div>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.CheckIn }); setIsEventTypeListShown(false); } } id="event-type-check-in-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" checked={ formData.type === TravelType.CheckIn } />
                <label className="event__type-label  event__type-label--check-in" htmlFor="event-type-check-in-1">Check-in</label>
              </div>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.Sightseeing }); setIsEventTypeListShown(false); } } id="event-type-sightseeing-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" checked={ formData.type === TravelType.Sightseeing } />
                <label className="event__type-label  event__type-label--sightseeing" htmlFor="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div className="event__type-item">
                <input onChange={ () => { setFormData({ ...formData, type: TravelType.Restaurant }); setIsEventTypeListShown(false); } } id="event-type-restaurant-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" checked={ formData.type === TravelType.Restaurant } />
                <label className="event__type-label  event__type-label--restaurant" htmlFor="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="event__field-group  event__field-group--destination">
          <label className="event__label  event__type-output" htmlFor="event-destination-1">
            { formData.type }
          </label>
          <input onChange={ (evt) => setDestinationInputValue(evt.target.value) } className="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value={ destinationInputValue } list="destination-list-1" />
          <datalist id="destination-list-1">
            {
              destinations.map((destination) => <option value={ destination.name } key={ destination.id }></option>)
            }
          </datalist>
        </div>

        <div className="event__field-group  event__field-group--time">
          <label className="visually-hidden" htmlFor="event-start-time-1">From</label>
          <input ref={ dateFromInputRef } className="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value={ formatDateTime(formData.dateFrom, 'DD/MM/YY HH:mm') } />
          &mdash;
          <label className="visually-hidden" htmlFor="event-end-time-1">To</label>
          <input ref={ dateToInputRef } className="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value={ formatDateTime(formData.dateTo, 'DD/MM/YY HH:mm') } />
        </div>

        <div className="event__field-group  event__field-group--price">
          <label className="event__label" htmlFor="event-price-1">
            <span className="visually-hidden">Price</span>
            &euro;
          </label>
          <input onChange={ (evt) => setFormData({ ...formData, basePrice: Number(evt.target.value) }) } className="event__input  event__input--price" id="event-price-1" type="number" min="1" max="9999999" name="event-price" value={ formData.basePrice } />
        </div>

        <button className="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button className="event__reset-btn" type="reset">Delete</button>
        <button onClick={ props.onCloseButtonClick } className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </header>
      <section className="event__details">
        <section className="event__section  event__section--offers">
          <h3 className="event__section-title  event__section-title--offers">Offers</h3>

          <div className="event__available-offers">
            <div className="event__offer-selector">
              <input className="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked />
              <label className="event__offer-label" htmlFor="event-offer-luggage-1">
                <span className="event__offer-title">Add luggage</span>
                &plus;&euro;&nbsp;
                <span className="event__offer-price">50</span>
              </label>
            </div>

            <div className="event__offer-selector">
              <input className="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked />
              <label className="event__offer-label" htmlFor="event-offer-comfort-1">
                <span className="event__offer-title">Switch to comfort</span>
                &plus;&euro;&nbsp;
                <span className="event__offer-price">80</span>
              </label>
            </div>

            <div className="event__offer-selector">
              <input className="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal" />
              <label className="event__offer-label" htmlFor="event-offer-meal-1">
                <span className="event__offer-title">Add meal</span>
                &plus;&euro;&nbsp;
                <span className="event__offer-price">15</span>
              </label>
            </div>

            <div className="event__offer-selector">
              <input className="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats" />
              <label className="event__offer-label" htmlFor="event-offer-seats-1">
                <span className="event__offer-title">Choose seats</span>
                &plus;&euro;&nbsp;
                <span className="event__offer-price">5</span>
              </label>
            </div>

            <div className="event__offer-selector">
              <input className="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train" />
              <label className="event__offer-label" htmlFor="event-offer-train-1">
                <span className="event__offer-title">Travel by train</span>
                &plus;&euro;&nbsp;
                <span className="event__offer-price">40</span>
              </label>
            </div>
          </div>
        </section>

        <section className="event__section  event__section--destination">
          <h3 className="event__section-title  event__section-title--destination">Destination</h3>
          <p className="event__destination-description">{ getDestinationDescriptionById(destinations, formData.destination) }</p>
        </section>
      </section>
    </form>
  );
}

export default EditEventForm;
