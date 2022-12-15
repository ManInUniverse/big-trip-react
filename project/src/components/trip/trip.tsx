import React from 'react';
import Filter from '../filter/filter';
import TripEvents from '../trip-events/trip-events';

function Trip(): JSX.Element {
  return (
    <React.Fragment>
      <header className="page-header">
        <div className="page-body__container  page-header__container">
          <img className="page-header__logo" src="img/logo.png" width="42" height="42" alt="Trip logo"></img>

          <div className="trip-main">
            <div className="trip-main__trip-controls  trip-controls">
              <div className="trip-controls__filters">
                <h2 className="visually-hidden">Filter events</h2>

                <Filter />
              </div>
            </div>

            <button className="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
          </div>
        </div>
      </header>
      <main className="page-body__page-main  page-main">
        <div className="page-body__container">

          <TripEvents />
        </div>
      </main>
    </React.Fragment>
  );
}

export default Trip;
