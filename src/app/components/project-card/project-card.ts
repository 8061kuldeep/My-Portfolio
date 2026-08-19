import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { Project } from '../../data/projects';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly expanded = signal(false);
  readonly visibleHighlights = computed(() => this.expanded() ? this.project().highlights : this.project().highlights.slice(0, 3));

  toggleExpanded(): void {
    this.expanded.update((value) => !value);
  }
}
