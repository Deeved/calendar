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
  lang: string = null

  constructor() {
    this.lang = window.navigator.language;
    console.log(this.lang);
  }

  toggle() {
    this.visible = !this.visible;
  }

  ngOnInit() {
    const date = this.dateLabel ? new Date(this.dateLabel) : new Date();  
    
    this.date = new Day(date, this.lang);
    
    this.calendar = new Calendar(this.date.year, this.date.monthNumber, this.lang);
        
    this.dateLabel = this.date.format(this.format);
    
    this.monthYear = `${this.calendar.month.name}, ${this.calendar.year}`;
    
  }
}
