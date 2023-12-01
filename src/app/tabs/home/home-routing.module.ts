import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomePage
      },
      {
        path: "help",
        loadChildren: () =>
          import("./help/help.module").then((m) => m.HelpPageModule)
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./settings/settings.module").then((m) => m.SettingsPageModule)
      },
      {
        path: "create-appointment",
        loadChildren: () =>
          import("./settings/settings.module").then((m) => m.SettingsPageModule)
      }
    ]
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsPageModule)
  },
  {
    path: "create-appointment",
    loadChildren: () =>
      import("./create-appointment/create-appointment.module").then(
        (m) => m.CreateAppointmentPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}