import { Component, computed, signal } from "@angular/core";
import { Store } from "@ngrx/store";
import moment from "moment";
import { CalendarService } from "src/app/services/calendar.service";
import { selectDate } from "src/app/state/selectors/app.selectors";
import { selectUserFirstName } from "src/app/state/selectors/user.selectors";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage {
  selectedDate = this.store.selectSignal(selectDate);
  appointments = signal<any[]>([]);
  firstName = this.store.selectSignal(selectUserFirstName);

  get fullDate() {
    return moment(this.selectedDate(), "YYYY-MM-DD")
      .locale("pt-BR")
      .calendar({
        sameDay: "[Para hoje]",
        lastDay: "[Agenda de ontem]",
        sameElse: "[Agenda de] DD/MM/YYYY",
        lastWeek() {
          const date = this as unknown as moment.Moment;
          const weekday = date.locale("pt-BR").format("dddd");
          const lastCharacter = weekday.charAt(weekday.length - 1);

          return `[Agenda d${lastCharacter} ${weekday} passad${lastCharacter}]`;
        },
        nextDay: "[Agenda de amanhã]",
        nextWeek: `[Agenda de] dddd`
      });
  }

  isToday = computed(() =>
    moment(this.selectedDate(), "YYYY-MM-DD").isSame(
      moment().format("YYYY-MM-DD")
    )
  );

  constructor(
    private readonly store: Store,
    private readonly calendar: CalendarService
  ) {}
}
