import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { provideHttpClient } from "@angular/common/http";
import { InfoComponent } from "./components/info/info.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        InfoComponent,
        ContactsComponent,
        HomeComponent,
        FooterComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent],
})
export class AppModule {}
