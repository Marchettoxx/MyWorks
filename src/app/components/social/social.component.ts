import { Component } from "@angular/core";
import { Social } from "../../interfaces/social";
import { SOCIALS } from "../../mocks/mock-social";

@Component({
    selector: "app-social",
    templateUrl: "./social.component.html",
    styleUrl: "./social.component.css",
})
export class SocialComponent {
    cardData: Social[] = SOCIALS;
}
