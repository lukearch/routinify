import { createReducer } from "@ngrx/store";

export const USER_FEATURE_KEY = "user";

export interface State {
  name?: string;
}

const initialState: State = {
  name: "Lucas Larangeira"
};

export const reducer = createReducer(initialState);
