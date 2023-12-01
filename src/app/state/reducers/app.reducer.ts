import { createReducer, on } from "@ngrx/store";
import { AppActions } from "../actions/app.actions";

export const APP_FEATURE_KEY = "app";

export interface State {
  date?: string;
}

const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(
    AppActions.selectDate,
    (state, { date }): State => ({
      ...state,
      date
    })
  )
);
