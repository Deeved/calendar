export class Day {
  January = 0;
  FirstDayOfTheYear = 1;
  DayInMilliseconds = 86400000;
  TotalDaysOfTheWeek = 7;

  constructor(private date: Date = null, private lang = "default") {
    date ? (this.date = date) : (this.date = new Date());
  }

  get dayOfTheMonth() {
    // getdate
    return this.date.getDate();
  }

  get dayOfTheWeekInNumeral() {
    return this.date.getDay() + 1; // dayNumber
  }

  get dayOfTheWeekInLongString() {
    return this.date.toLocaleString(this.lang, { weekday: "long" }); // day
  }

  get dayOfTheWeekInShortString() {
    return this.date.toLocaleString(this.lang, { weekday: "short" }); // dayShort
  }

  get monthInLongString() {
    return this.date.toLocaleString(this.lang, { month: "long" }); //month
  }

  get monthInShortString() {
    return this.date.toLocaleString(this.lang, { month: "short" });
  }

  get monthInNumeral() {
    return Number(this.date.toLocaleString(this.lang, { month: "2-digit" }));
  }

  get year() {
    return this.date.getFullYear();
  }

  get yearShort() {
    return Number(this.date.toLocaleString(this.lang, { year: "2-digit" }));
  }

  get timestamp() {
    return this.date.getTime();
  }

  get weekNumber() {
    const firstDayOfTheYear = new Date(
      this.year,
      this.January,
      this.FirstDayOfTheYear
    );
    const pastDaysOfYear =
      (this.timestamp - firstDayOfTheYear.getTime()) / this.DayInMilliseconds;

    return Math.ceil(
      (pastDaysOfYear + firstDayOfTheYear.getDay() + 1) /
        this.TotalDaysOfTheWeek
    );
  }

  get isToday() {
    return this.isEqualTo(new Date());
  }

  isEqualTo(date: Date) {
    date = date instanceof Day ? date.date : date;

    return (
      date.getDate() === this.date.getDate() &&
      date.getMonth() === this.monthInNumeral - 1 &&
      date.getFullYear() === this.year
    );
  }

  format(formatStr) {
    return formatStr
      .replace(/\bYYYY\b/, this.year)
      .replace(/\bYYY\b/, this.yearShort)
      .replace(/\bWW\b/, this.weekNumber.toString().padStart(2, "0"))
      .replace(/\bW\b/, this.weekNumber)
      .replace(/\bDDDD\b/, this.dayOfTheWeekInLongString)
      .replace(/\bDDD\b/, this.dayOfTheWeekInShortString)
      .replace(/\bDD\b/, this.dayOfTheMonth.toString().padStart(2, "0"))
      .replace(/\bD\b/, this.date)
      .replace(/\bMMMM\b/, this.monthInLongString)
      .replace(/\bMMM\b/, this.monthInShortString)
      .replace(/\bMM\b/, this.monthInNumeral.toString().padStart(2, "0"))
      .replace(/\bM\b/, this.monthInNumeral);
  }
}
