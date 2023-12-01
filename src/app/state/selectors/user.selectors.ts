import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUser from "../reducers/user.reducer";

const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.USER_FEATURE_KEY
);

export const selectUserName = createSelector(
  selectUserState,
  (state) => state.name
);

export const selectUserFirstName = createSelector(
  selectUserName,
  (name) => name?.split(" ")?.[0]
);
