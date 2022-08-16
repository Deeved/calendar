import { Component, OnInit } from "@angular/core";
import { Day } from "./Helpers/Day";
import { Month } from "./Helpers/Month";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const day = new Day();
    console.log("-- getDayOfTheMonth", day.dayOfTheMonth);
    console.log("-- getDayOfTheWeekInNumeral", day.dayOfTheWeekInNumeral);
    console.log(
      "-- getDayOfTheWeekInShortString",
      day.dayOfTheWeekInShortString
    );
    console.log("-- getDayOfTheWeekInLongString", day.dayOfTheWeekInLongString);
    console.log("-- yearShort", day.yearShort);
    console.log("-- year", day.year);
    console.log("-- month", day.monthInShortString);
    console.log("-- month", day.monthInLongString);
    console.log("-- month", day.monthInNumeral);
    console.log("-- timestamp", day.timestamp);
    console.log("-- weekNumber", day.weekNumber);
    console.log("-- isToday", day.isToday);
    console.log("-- day", day.format("MMM DD (DDDD/WW), YYYY"));

    const month = new Month();
    console.log(month);
  }
}
