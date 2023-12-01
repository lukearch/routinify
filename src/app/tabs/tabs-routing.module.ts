import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const defaultPath: Route = {
  path: "",
  redirectTo: "/tabs/home",
  pathMatch: "full"
};

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomePageModule)
      },
      defaultPath
    ]
  },
  defaultPath
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
