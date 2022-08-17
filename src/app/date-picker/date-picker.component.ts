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

  getMonthDaysGrid() {
    const firstDayOfTheMonth = this.calendar.month.getDay(1);
    const totalLastMonthFinalDays = firstDayOfTheMonth.dayNumber - 1
    const totalDays = this.calendar.month.numberOfDays + totalLastMonthFinalDays;
    const monthList = Array.from({length: totalDays});

    for(let i = totalLastMonthFinalDays; i < totalDays; i++) {
      monthList[i] = this.calendar.month.getDay(i + 1 - totalLastMonthFinalDays)
    }

    return monthList;
  }

  updateMonthDays() {
    return (this.getMonthDaysGrid() as unknown as Day[]).map( day => {
      return day ? day : ''
    })
  }

  isSelectedDate(date) {
    return date.date === this.date.date &&
      date.monthNumber === this.date.monthNumber &&
      date.year === this.date.year;
  }
}
