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
    const day = new Day(new Date("2021-02-07T03:00:00"));

    const month = new Month();
  }
}
