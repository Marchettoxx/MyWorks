import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoComponent } from "./components/info/info.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactsComponent } from "./components/contacts/contacts.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "info", component: InfoComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "home", component: HomeComponent },
    { path: "contacts", component: ContactsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
