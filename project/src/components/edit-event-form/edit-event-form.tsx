type EditEventFormProps = {
  onCloseButtonClick: () => void;
}

function EditEventForm(props: EditEventFormProps): JSX.Element {
  return (
    <form className="event event--edit" action="#" method="post">
      <header className="event__header">
        <div className="event__type-wrapper">
          <label className="event__type  event__type-btn" htmlFor="event-type-toggle-1">
            <span className="visually-hidden">Choose event type</span>
            <img className="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon" />
          </label>
          <input className="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" />

          <div className="event__type-list">
            <fieldset className="event__type-group">
              <legend className="visually-hidden">Event type</legend>

              <div className="event__type-item">
                <input id="event-type-taxi-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" />
                <label className="event__type-label  event__type-label--taxi" htmlFor="event-type-taxi-1">Taxi</label>
              </div>

              <div className="event__type-item">
                <input id="event-type-bus-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" />
                <label className="event__type-label  event__type-label--bus" htmlFor="event-type-bus-1">Bus</label>
              </div>

              <div className="event__type-item">
                <input id="event-type-train-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="train" />
                <label className="event__type-label  event__type-label--train" htmlFor="event-type-train-1">Train</label>
              </div>

              <div className="event__type-item">
                <input id="event-type-ship-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" />
                <label className="event__type-label  event__type-label--ship" htmlFor="event-type-ship-1">Ship</label>
              </div>

              <div className="event__type-item">
                <input id="event-type-drive-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" />
                <label className="event__type-label  event__type-label--drive" htmlFor="event-type-drive-1">Drive</label>
              </div>

              <div className="event__type-item">
                <input id="event-type-flight-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked />
                <label className="event__type-label  event__type-label--flight" htmlFor="event-type-flight-1">Flight</label>
              </div>

              <div className="event__type-item">
                <input id="event-type-check-in-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" />
                <label className="event__type-label  event__type-label--check-in" htmlFor="event-type-check-in-1">Check-in</label>
              </div>

              <div className="event__type-item">
                <input id="event-type-sightseeing-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" />
                <label className="event__type-label  event__type-label--sightseeing" htmlFor="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div className="event__type-item">
                <input id="event-type-restaurant-1" className="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" />
                <label className="event__type-label  event__type-label--restaurant" htmlFor="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="event__field-group  event__field-group--destination">
          <label className="event__label  event__type-output" htmlFor="event-destination-1">
            Flight
          </label>
          <input className="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1" />
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>

        <div className="event__field-group  event__field-group--time">
          <label className="visually-hidden" htmlFor="event-start-time-1">From</label>
          <input className="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25" />
          &mdash;
          <label className="visually-hidden" htmlFor="event-end-time-1">To</label>
          <input className="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35" />
        </div>

        <div className="event__field-group  event__field-group--price">
          <label className="event__label" htmlFor="event-price-1">
            <span className="visually-hidden">Price</span>
            &euro;
          </label>
          <input className="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160" />
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
          <p className="event__destination-description">{'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.'}</p>
        </section>
      </section>
    </form>
  );
}

export default EditEventForm;
