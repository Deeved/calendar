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

    this.name = this.day.month;
    this.number = this.day.monthNumber;
    this.year = this.day.year;
    this.numberOfDays = this.MonthsSize[this.number - 1];

    if (this.number === this.February) {
      this.numberOfDays += this.isLeapYear(this.day) ? 1 : 0;
    }

    this[Symbol.iterator] = function* () {
      let number = 1;
      yield this.getDay(number);
      while (number < this.numberOfDays) {
        ++number;
        yield this.getDay(number);
      }
    };
  }

  getDay(date) {
    return new Day(new Date(this.year, this.number - 1, date), this.lang);
  }

  isLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
}
