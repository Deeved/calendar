import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IonModule } from "@brisanet/ion";
import { DatePickerComponent } from "./date-picker/date-picker.component";
@NgModule({
  declarations: [AppComponent, DatePickerComponent],
  imports: [BrowserModule, AppRoutingModule, IonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
