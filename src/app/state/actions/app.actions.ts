import { createActionGroup, props } from "@ngrx/store";

export const AppActions = createActionGroup({
  source: "App",
  events: {
    "Select Date": props<{
      date: string;
    }>()
  }
});
