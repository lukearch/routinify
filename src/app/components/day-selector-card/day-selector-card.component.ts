import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-day-selector-card",
  templateUrl: "./day-selector-card.component.html",
  styleUrls: ["./day-selector-card.component.scss"]
})
export class DaySelectorCardComponent {
  @Input() active = false;
  @Input({
    required: true
  })
  day? = {
    day: "Segunda",
    short: "Seg",
    number: 1
  };

  @HostBinding("style.opacity")
  get opacity() {
    return this.active ? 1 : 0.4;
  }
}
