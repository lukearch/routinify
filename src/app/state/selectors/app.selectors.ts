import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromApp from "../reducers/app.reducer";

const selectAppState = createFeatureSelector<fromApp.State>(
  fromApp.APP_FEATURE_KEY
);

export const selectDate = createSelector(selectAppState, (state) => state.date);
