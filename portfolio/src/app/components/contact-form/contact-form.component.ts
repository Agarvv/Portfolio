import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as emailjs from 'emailjs-browser';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            from_name: "",
            to_name: "",
            from_email: "",
            subject: "",
            message: ""    
        });
    }
    
    // XyndWu2bU3PKnrCip

    sendMail() {
        console.log(" called", this.form.value)
        
        emailjs.send('service_b7oxtma', 'template_m01ebq1', {
            from_name: this.form.value.from_name,
            to_name: this.form.value.to_name,
            from_email: this.form.value.from_email,
            subject: this.form.value.subject,
            message: this.form.value.message
        }).then(() => {
            alert("Mail sent!");
        }, (err: any) => {
            console.log("Mail sending error", err);
        });
    }
}