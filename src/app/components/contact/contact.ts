import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly profile = PROFILE;
  readonly submitted = signal(false);

  readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  submit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // TODO: Integrate backend form submission or email service.
    this.submitted.set(true);
    this.contactForm.reset();
    this.contactForm.markAsPristine();
    this.contactForm.markAsUntouched();
  }

  hasError(controlName: 'name' | 'email' | 'message', error: string): boolean {
    const control = this.contactForm.get(controlName);
    return Boolean(control?.touched && control.hasError(error));
  }
}
