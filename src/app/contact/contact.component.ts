import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formSending = false;
  alreadySend = false;
  errorInfo: any = false;

  // contactForm = new FormGroup({
  //   from_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   from_email: new FormControl('', [Validators.required, Validators.email]),
  //   message: new FormControl('', [Validators.required, Validators.minLength(10)])
  // });


  form: FormGroup = this.fb.group({
    from_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    from_email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  constructor(private fb: FormBuilder) {

  }



  /** takes the value of the inputfields and sends the FormData to the mail adress */
  async sendMail() {
    try {
      // this.errorInfo = false;
      // let nameField: any = this.contactForm.controls['nameInput'];
      // let mailField: any = this.contactForm.controls['emailInput'];
      // let messageField: any = this.contactForm.controls['messageInput'];

      // this.contactForm.disable();

      // let formData = new FormData();
      // formData.append('name', nameField.value);
      // formData.append('mail', mailField.value);
      // formData.append('message', messageField.value);
      // this.sendData(formData);

      emailjs.init('Rz0Di7YMPdyJ1vxMx');

      let response = await emailjs.send("service_8j2swyq", "template_ss9byks", {
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        message: this.form.value.message
      });

      if (response.status === 200) {  // assuming response has a status property
        this.confirmationMessage();
      } else {
        this.errorMessage();
      }
    } catch (error) {
      this.errorMessage();
      console.error(error);
    } finally {
      this.resetContactForm();
    }
  }


  /**
  * Sends the provided FormData to a specified URL and handles the response.
  * @param formData - The FormData to be sent in the POST request.
  */
  async sendData(formData: FormData) {
    try {

      const response = await fetch("https://kowalczyk-karol.de/sendMail.php", {
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
    this.form.reset();
    this.form.enable();
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