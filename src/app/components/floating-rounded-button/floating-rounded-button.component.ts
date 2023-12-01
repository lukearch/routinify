import { Component, Input } from "@angular/core";

@Component({
  selector: "app-floating-rounded-button",
  templateUrl: "./floating-rounded-button.component.html",
  styleUrls: ["./floating-rounded-button.component.scss"]
})
export class FloatingRoundedButtonComponent {
  @Input({
    required: true
  })
  icon: string = "";

  constructor() {}
}
