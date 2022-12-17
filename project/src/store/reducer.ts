import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/store';
import { fetchDestinationsAction, fetchOffersByTypeAction, fetchPointsAction } from './api-actions';

const initialState: InitialState = {
  isLoading: false,
  hasError: false,
  destinations: [],
  offersByType: [],
  points: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchDestinationsAction.pending, (state) => {
      state.hasError = false;
      state.isLoading = true;
    })
    .addCase(fetchDestinationsAction.fulfilled, (state, action) => {
      state.destinations = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchDestinationsAction.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    })
    // ----------------------------------------------------------------
    .addCase(fetchOffersByTypeAction.pending, (state) => {
      state.hasError = false;
      state.isLoading = true;
    })
    .addCase(fetchOffersByTypeAction.fulfilled, (state, action) => {
      state.offersByType = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOffersByTypeAction.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    })
    // ----------------------------------------------------------------
    .addCase(fetchPointsAction.pending, (state) => {
      state.hasError = false;
      state.isLoading = true;
    })
    .addCase(fetchPointsAction.fulfilled, (state, action) => {
      state.points = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchPointsAction.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    });
});

export { reducer };
