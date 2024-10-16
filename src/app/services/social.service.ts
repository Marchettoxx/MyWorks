import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Github } from "../interfaces/github";
import { concatMap, map, Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class SocialService {
    constructor(private httpClient: HttpClient) {}

    getGitHubData(): Observable<Github> {
        return this.httpClient
            .get(`https://api.github.com/users/Marchettoxx`)
            .pipe(
                map((data: any) => {
                    return <Github>{
                        social_name: "GitHub",
                        avatar_url: data.avatar_url,
                        bio: data.bio,
                        html_url: data.html_url,
                    };
                })
            );
    }
}
