import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { provideHttpClient } from "@angular/common/http";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { SocialComponent } from "./components/social/social.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        ContactsComponent,
        SocialComponent,
        HomeComponent,
        FooterComponent,
        NavbarComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent],
})
export class AppModule {}
