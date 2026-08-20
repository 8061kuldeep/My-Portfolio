import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ProjectCardComponent } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  readonly featuredProjects = PROJECTS.filter((project) => project.featured && project.category === 'enterprise');
}
