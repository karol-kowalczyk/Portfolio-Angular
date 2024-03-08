import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formSending = false;
  alreadySend = false;
  errorInfo: any = false;

  contactForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required, Validators.minLength(3)]),
    emailInput: new FormControl('', [Validators.required, Validators.email]),
    messageInput: new FormControl('', [Validators.required, Validators.minLength(10)])
  });


  /** takes the value of the inputfields and sends the FormData to the mail adress */
  sendMail() {
    this.errorInfo = false;
    let nameField: any = this.contactForm.controls['nameInput'];
    let mailField: any = this.contactForm.controls['emailInput'];
    let messageField: any = this.contactForm.controls['messageInput'];

    this.contactForm.disable();

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('mail', mailField.value);
    formData.append('message', messageField.value);
    this.sendData(formData);

    this.confirmationMessage();
    this.resetContactForm();
  }


  /**
  * Sends the provided FormData to a specified URL and handles the response.
  * @param formData - The FormData to be sent in the POST request.
  */
  async sendData(formData: FormData) {
    try {

      const response = await fetch("https://formspree.io/f/myyqoebp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {

        this.confirmationMessage();
      } else {

        this.errorMessage();
      }
    } catch (error) {

      this.errorMessage();
      console.error(error);
    }
  }


  /** display the error message after sendData error */
  errorMessage() {
    this.errorInfo = true;
  }

  /** resets and enables the contact form */
  resetContactForm() {
    this.contactForm.reset();
    this.contactForm.enable();
  }

  /** changes booleans to display the confirmation message */
  confirmationMessage() {
    this.formSending = true;
    this.alreadySend = true;
    setTimeout(() => {
      this.formSending = false;
    }, 3500);
  }

}