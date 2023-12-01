import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectUserFirstName } from "src/app/state/selectors/user.selectors";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  firstName = this.store.selectSignal(selectUserFirstName);

  constructor(private readonly store: Store) {}
}
