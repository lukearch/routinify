import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromApp from "./reducers/app.reducer";
import * as fromUser from "./reducers/user.reducer";

export interface State {
  [fromApp.APP_FEATURE_KEY]: fromApp.State;
  [fromUser.USER_FEATURE_KEY]: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromApp.APP_FEATURE_KEY]: fromApp.reducer,
  [fromUser.USER_FEATURE_KEY]: fromUser.reducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
