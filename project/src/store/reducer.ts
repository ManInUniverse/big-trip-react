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
    .addCase(fetchDestinationsAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchDestinationsAction.fulfilled, (state, action) => {
      state.destinations = action.payload;
      state.isLoading = false;
    })

    .addCase(fetchOffersByTypeAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffersByTypeAction.fulfilled, (state, action) => {
      state.offersByType = action.payload;
      state.isLoading = false;
    })

    .addCase(fetchPointsAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchPointsAction.fulfilled, (state, action) => {
      state.points = action.payload;
      state.isLoading = false;
    });
});

export { reducer };
