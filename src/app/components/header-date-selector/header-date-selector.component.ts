import { Component, ElementRef, ViewChild, signal } from "@angular/core";
import { IonicSlides } from "@ionic/angular";
import { CalendarService } from "src/app/services/calendar.service";
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

  years = [
    this.calendar.buildYear(this.calendar.currentYear - 1),
    this.calendar.buildYear(this.calendar.currentYear),
    this.calendar.buildYear(this.calendar.currentYear + 1)
  ];

  @ViewChild("months")
  private monthsSwiper?: ElementRef<SwiperContainer>;

  constructor(private readonly calendar: CalendarService) {}

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

  selectDay(day: number) {
    this.activeDay.set(day);
  }

  getYearIndex(year: number) {
    return this.years.findIndex((y) => y.year === year);
  }

  changeSlide(event: Event) {
    const e = event as CustomEvent<[Swiper]>;
    this.activeMonth.set(e.detail[0].activeIndex);
  }
}
