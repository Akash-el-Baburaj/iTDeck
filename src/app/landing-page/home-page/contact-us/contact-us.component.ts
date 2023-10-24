import { Component, ElementRef, NgZone, Renderer2,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare const hbspt: any;

@Component({
  selector: 'app-landing-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm!: FormGroup;
  submitted: boolean = false;

  constructor (
    private fb: FormBuilder,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private ngZone: NgZone
    ) { }

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';

    script.onload = () => {
      this.ngZone.runOutsideAngular(() => {
        hbspt.forms.create({
          portalId: '44117014',
          formId: '50a08316-6d74-4eb9-9975-58c14c204651',
          target: '#hubspotForm',
        });
      });
    };

    this.renderer.appendChild(this.elementRef.nativeElement, script);

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get form1() { return this.contactForm.controls; }

}
