import { Component } from "@angular/core";
import { Contact } from "../../interfaces/contact";
import { CONTACTS } from "../../mocks/mock-contacts";

@Component({
    selector: "app-contacts",
    templateUrl: "./contacts.component.html",
    styleUrl: "./contacts.component.css",
})
export class ContactsComponent {
    cardData: Contact[] = CONTACTS;
}
