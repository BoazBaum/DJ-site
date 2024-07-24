import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  email: string = '';
  message: string = '';

  constructor(private emailService: EmailService) {}

  sendEmail() {
    this.emailService.sendEmail('recipient@example.com', 'Subject Here', 'Email body text here')
      .subscribe(
        response => console.log('Email sent successfully:', response),
        error => console.error('Failed to send email:', error)
      );
  }
}
