import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { PROJECTS } from '../../mocks/mock-projects';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {

  }

  ngOnInit(): void {
    this.projectService.getUserRepos()
      .subscribe((projects: Project[]) => this.projects = projects
    )
  }
}
