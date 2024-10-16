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
        this.socialService.getGitHubData().subscribe(
            (data: Github) =>
                (this.cardData = [
                    <Social>{
                        title: data.social_name,
                        imgSrc: data.avatar_url,
                        bio: data.bio,
                        link: data.html_url,
                    },
                ])
        );
    }
}
