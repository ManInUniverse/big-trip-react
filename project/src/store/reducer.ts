import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/store';
import { fetchDestinationsAction, fetchOffersByTypeAction, fetchPointsAction } from './api-actions';

const initialState: InitialState = {
  isLoading: false,
  destinations: [],
  offersByType: [],
  points: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchDestinationsAction.fulfilled, (state, action) => {
      state.destinations = action.payload;
    })
    .addCase(fetchOffersByTypeAction.fulfilled, (state, action) => {
      state.offersByType = action.payload;
    })
    .addCase(fetchPointsAction.fulfilled, (state, action) => {
      state.points = action.payload;
    });
});

export { reducer };
