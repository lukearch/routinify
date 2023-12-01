import { Component, computed, signal } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { IonicSlides } from "@ionic/angular";
import { Store } from "@ngrx/store";
import moment from "moment";
import { CalendarService } from "src/app/services/calendar.service";
import { AppActions } from "src/app/state/actions/app.actions";
import Swiper from "swiper";
import { SwiperContainer } from "swiper/element";
import { FreeMode, Navigation } from "swiper/modules";

@Component({
  selector: "app-header-date-selector",
  templateUrl: "./header-date-selector.component.html",
  styleUrls: ["./header-date-selector.component.scss"]
})
export class HeaderDateSelectorComponent {
  activeYear = signal(this.calendar.currentYear);
  activeMonth = signal(this.calendar.currentMonth.number);
  activeDay = signal(this.calendar.currentDay);
  swiperModules = [IonicSlides, Navigation, FreeMode];

  date = computed(
    () => `${this.activeYear()}-${this.activeMonth() + 1}-${this.activeDay()}`
  );

  onDateChange$ = toObservable(this.date).subscribe((date) => {
    this.store.dispatch(AppActions.selectDate({ date }));
  });

  years = [
    this.calendar.buildYear(this.calendar.currentYear - 1),
    this.calendar.buildYear(this.calendar.currentYear),
    this.calendar.buildYear(this.calendar.currentYear + 1)
  ];

  constructor(
    private readonly calendar: CalendarService,
    private store: Store
  ) {}

  isToday(day: number) {
    return moment(
      `${this.activeYear()}-${this.activeMonth() + 1}-${day}`,
      "YYYY-MM-DD"
    ).isSame(moment().format("YYYY-MM-DD"));
  }

  nextMonth(sc: SwiperContainer) {
    sc.swiper.slideNext(500, true);
  }

  prevMonth(sc: SwiperContainer) {
    sc.swiper.slidePrev(500, true);
  }

  canSlideNext(sc: SwiperContainer) {
    return sc.swiper.activeIndex + 1 < sc.swiper.slides.length;
  }

  canSlidePrev(sc: SwiperContainer) {
    return sc.swiper.activeIndex !== 0;
  }

  selectYear(year: number) {
    this.activeYear.set(year);
  }

  selectDay(day: number, days: SwiperContainer) {
    this.activeDay.set(day);
    days.swiper.slideTo(day - 1);
  }

  getYearIndex(year: number) {
    return this.years.findIndex((y) => y.year === year);
  }

  changeSlide(event: Event) {
    const e = event as CustomEvent<[Swiper]>;
    this.activeMonth.set(e.detail[0].activeIndex);
  }

  changeDaySlide(event: Event) {
    const e = event as CustomEvent<[Swiper]>;
    this.activeDay.set(e.detail[0].activeIndex + 1);
  }
}
