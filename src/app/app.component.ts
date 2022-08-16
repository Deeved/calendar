import { Component, OnInit } from "@angular/core";
import { Calendar } from "./Helpers/Calendar";
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

    const month = new Month();

    const cal = new Calendar();
  }
}
