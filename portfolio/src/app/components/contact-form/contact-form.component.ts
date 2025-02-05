import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    form: FormGroup;
    loading = false;
    successMessage = '';
    errorMessage = '';

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            from_name: ['', [Validators.required, Validators.minLength(3)]],
            from_email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    sendMail() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.loading = true;
        this.successMessage = '';
        this.errorMessage = '';

        emailjs.send(
            'service_b7oxtma', 
            'template_m01ebq1', 
            this.form.value,
            'XyndWu2bU3PKnrCip'
        ).then(() => {
            this.successMessage = '¡Correo enviado con éxito!';
            this.form.reset();
        }).catch(err => {
            this.errorMessage = 'Error al enviar el correo. Inténtalo de nuevo.';
            console.error("Error:", err);
        }).finally(() => {
            this.loading = false;
        });
    }

    fieldInvalid(field: string): boolean {
        return this.form.controls[field].invalid && this.form.controls[field].touched;
    }
}