import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { BackButtonComponent } from "./back-button/back-button.component";
import { DaySelectorCardComponent } from "./day-selector-card/day-selector-card.component";
import { FloatingRoundedButtonComponent } from "./floating-rounded-button/floating-rounded-button.component";
import { HeaderDateSelectorComponent } from "./header-date-selector/header-date-selector.component";
import { HeaderComponent } from "./header/header.component";
import { ReminderCardComponent } from "./reminder-card/reminder-card.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FloatingRoundedButtonComponent,
    BackButtonComponent,
    HeaderDateSelectorComponent,
    DaySelectorCardComponent,
    ReminderCardComponent
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [
    HeaderComponent,
    FloatingRoundedButtonComponent,
    BackButtonComponent,
    ReminderCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
