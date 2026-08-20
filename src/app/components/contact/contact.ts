import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../core/emailjs.config';
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
  readonly sending = signal(false);
  readonly sendError = signal(false);

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

    const { name, email, message } = this.contactForm.value;

    this.sending.set(true);
    this.sendError.set(false);

    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        { from_name: name, reply_to: email, message },
        { publicKey: EMAILJS_CONFIG.publicKey }
      )
      .then(() => {
        this.submitted.set(true);
        this.contactForm.reset();
        this.contactForm.markAsPristine();
        this.contactForm.markAsUntouched();
      })
      .catch(() => {
        this.sendError.set(true);
      })
      .finally(() => {
        this.sending.set(false);
      });
  }

  hasError(controlName: 'name' | 'email' | 'message', error: string): boolean {
    const control = this.contactForm.get(controlName);
    return Boolean(control?.touched && control.hasError(error));
  }
}
