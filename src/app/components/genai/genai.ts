import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ProjectVideoComponent, VideoConfig } from '../project-video/project-video';

@Component({
  selector: 'app-genai',
  standalone: true,
  imports: [CommonModule, ProjectVideoComponent],
  templateUrl: './genai.html',
  styleUrl: './genai.scss'
})
export class GenaiComponent {
  readonly aiProject = PROJECTS.find((project) => project.id === 'enterprise-ai-assistant');
  readonly videoConfig: VideoConfig | undefined = this.aiProject?.videoId
    ? {
        videoId: this.aiProject.videoId,
        title: `${this.aiProject.name} Demo`,
        description: 'Interactive walkthrough of the current AI engineering project.'
      }
    : undefined;

  scrollToArchitecture(): void {
    document.getElementById('genai-architecture')?.scrollIntoView({ behavior: 'smooth' });
  }
}
