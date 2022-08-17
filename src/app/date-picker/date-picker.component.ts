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
  calendarElement: HTMLElement;

  constructor() {
    this.lang = window.navigator.language;
    console.log(this.lang);
  }

  toggle() {
    if(!this.visible) {
      this.isCurrentCalendarMonth()

      this.calendar.goToDate(this.date.monthNumber, this.date.year);
      this.updatedMonthYear();      
    }

    this.visible = !this.visible;
  }

  ngOnInit() {
    const date = this.dateLabel ? new Date(this.dateLabel) : new Date();  
    
    this.date = new Day(date, this.lang);
    
    this.calendar = new Calendar(this.date.year, this.date.monthNumber, this.lang);
        
    this.dateLabel = this.date.format(this.format);
    
    this.monthYear = `${this.calendar.month.name}, ${this.calendar.year}`; 

    // document.addEventListener('click', (e) => this.handleClickOut(e))
    // const calendar = document.getElementById('calendar');
    // console.log(calendar);
    // if(calendar) {
    //   this.calendarElement = calendar
    //   this.calendarElement.addEventListener('click', (e) => this.handleClickOut(e))
    // }

    console.log(this.calendar.weekDays);
    
  }

  previousMonth() {
    this.calendar.goToPreviousMonth()
    this.updatedMonthYear()
  }

  nextMonth() {
    this.calendar.goToNextMonth()
    this.updatedMonthYear()
  }

  updatedMonthYear() {
    this.monthYear = `${this.calendar.month.name}, ${this.calendar.year}`
  }
  
  isCurrentCalendarMonth() {
    return this.calendar.month.number === this.date.monthNumber && 
      this.calendar.year === this.date.year
  }

  handleClickOut(e) {
    console.log(this);
    
    // console.log(e.target);
  } 
  
  getWeekDaysElementStrings() {
    return this.calendar.weekDays
      .map((weekDay) => `${(weekDay as string).substring(0, 3)}`)
  }

}
