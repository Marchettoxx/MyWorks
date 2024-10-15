import { Component } from "@angular/core";
import { Info } from "../../interfaces/info";
import { INFOS } from "../../mocks/mock-info";

@Component({
    selector: "app-contacts",
    templateUrl: "./contacts.component.html",
    styleUrl: "./contacts.component.css",
})
export class ContactsComponent {
    cardData: Info[] = INFOS;
}
