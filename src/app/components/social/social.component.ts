import { Component } from "@angular/core";
import { Social } from "../../interfaces/social";
import { SOCIALS } from "../../mocks/mock-social";
import { SocialService } from "../../services/social.service";
import { Github } from "../../interfaces/github";

@Component({
    selector: "app-social",
    templateUrl: "./social.component.html",
    styleUrl: "./social.component.css",
})
export class SocialComponent {
    cardData: Social[] = [];

    constructor(private socialService: SocialService) {}

    ngOnInit() {
        let temp = SOCIALS.filter((val) => val.title != "Github");
        this.socialService.getGitHubData().subscribe((data: Github) => {
            temp.push(<Social>{
                title: data.social_name,
                imgSrc: data.avatar_url,
                bio: data.bio,
                link: data.html_url,
            });
            this.cardData = temp;
        });

        this.socialService
            .getDataFromBackEnd()
            .subscribe((data) => console.log("Dati ottenuti: ", data));
    }
}
