import { Injectable } from "@angular/core";
import moment from "moment";
import months from "../../assets/json/months.json";
import weekdays from "../../assets/json/weekdays.json";

export type Year = {
  year: number;
  months: {
    month: string;
    number: number;
    days: {
      day: string;
      short: string;
      number: number;
    }[];
  }[];
};

@Injectable({
  providedIn: "root"
})
export class CalendarService {
  get now() {
    return moment();
  }

  get currentYear() {
    return this.now.get("year");
  }

  get currentDay() {
    return this.now.get("D");
  }

  get currentMonth() {
    const number = this.now.get("M");
    return {
      number,
      month: this.months[number]
    };
  }

  get months() {
    return months as {
      [key: string | number]: string;
    };
  }

  get weekdays() {
    return weekdays as {
      [key: string | number]: string;
    };
  }

  public daysOfMonth(month: number | string, year: number) {
    return moment(`${month} ${year}`, "M YYYY").daysInMonth();
  }

  public constructCalendarForMonth(month: number | string, year: number) {
    const calendar = moment(`${month} ${year}`, "M YYYY").startOf("M");
    const daysInMonth = this.daysOfMonth(month, year);
    const monthName = this.months[calendar.get("M")];

    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: this.weekdays[calendar.get("weekday")],
        short: this.weekdays[calendar.get("weekday")].slice(0, 3),
        number: i
      });

      calendar.add(1, "day");
    }

    return {
      month: monthName,
      number: Number(month),
      days
    };
  }

  public buildYear(year: number): Year {
    return {
      year,
      months: Object.keys(this.months).map((month) => {
        return this.constructCalendarForMonth(Number(month) + 1, year);
      })
    };
  }
}
