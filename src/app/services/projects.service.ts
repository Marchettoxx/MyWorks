import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getUserRepos(): Observable<Project[]> {
    return this.httpClient.get(`https://api.github.com/users/Marchettoxx/repos`).
        pipe(
            map((item: any) => item.map((project: Project) => <Project>{
              description: project.description,
              language: project.language,
              name: project.name,
              clone_url: project.clone_url,
            })))
  }
}
