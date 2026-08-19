import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface VideoConfig {
  videoId: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-project-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-video.html',
  styleUrl: './project-video.scss'
})
export class ProjectVideoComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly video = input<VideoConfig | undefined>();
  readonly isOpen = signal(false);
  readonly isDisabled = computed(() => !this.video()?.videoId || this.video()?.videoId === 'PLACEHOLDER');
  readonly thumbnailUrl = computed(() => {
    const videoId = this.video()?.videoId;
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  });
  readonly embedUrl = computed<SafeResourceUrl | null>(() => {
    const videoId = this.video()?.videoId;
    if (!videoId || videoId === 'PLACEHOLDER') {
      return null;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
  });

  openModal(): void {
    if (!this.isDisabled()) {
      this.isOpen.set(true);
    }
  }

  closeModal(): void {
    this.isOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.closeModal();
    }
  }
}
