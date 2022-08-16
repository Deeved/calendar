import { Component, Input, OnInit } from "@angular/core";
import { Calendar } from "../Helpers/Calendar";
import { Day } from "../Helpers/Day";

@Component({
  selector: "date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent implements OnInit {
  @Input() format = "MMM DD, YYYY";
  @Input() position: "bottom";
  @Input() visible = false;
  @Input() dateLabel: string;
  date: Day;
  monthYear: string;
  calendar: Calendar;

  constructor() {
    const lang = window.navigator.language;
    console.log(lang);

    const date = this.date ? new Date(this.dateLabel) : new Date();

    this.date = new Day(date, lang);
    this.calendar = new Calendar(this.date.year, this.date.monthNumber, lang);
  }

  toggle() {
    this.visible = !this.visible;
  }

  ngOnInit() {
    console.log(this.date);

    this.dateLabel = this.date.format(this.format);

    this.monthYear = `${this.calendar.month.name}, ${this.calendar.year}`;
  }
}
