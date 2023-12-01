import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { BackButtonComponent } from "./back-button/back-button.component";
import { DaySelectorCardComponent } from "./day-selector-card/day-selector-card.component";
import { FloatingRoundedButtonComponent } from "./floating-rounded-button/floating-rounded-button.component";
import { HeaderDateSelectorComponent } from "./header-date-selector/header-date-selector.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FloatingRoundedButtonComponent,
    BackButtonComponent,
    HeaderDateSelectorComponent,
    DaySelectorCardComponent
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [
    HeaderComponent,
    FloatingRoundedButtonComponent,
    BackButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
