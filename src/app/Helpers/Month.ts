import { Day } from "./Day";

export class Month {
  day: Day;
  MonthsSize = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  February = 2;

  name: string;
  number: number;
  year: number;
  numberOfDays: number;
  constructor(private date = null, private lang = "default") {
    this.day = new Day(this.date, this.lang);

    this.name = this.day.monthInLongString;
    this.number = this.day.monthInNumeral;
    this.year = this.day.year;
    this.numberOfDays = this.MonthsSize[this.number - 1];

    if (this.number === this.February) {
      this.numberOfDays += isLeapYear(this.day) ? 1 : 0;
    }
  }
}

function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
