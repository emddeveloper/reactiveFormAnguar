import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-card-forms',
  templateUrl: './card-forms.component.html',
  styleUrls: ['./card-forms.component.css'],
})
export class CardFormsComponent implements OnInit {
  @Output() cardData = new EventEmitter();
  constructor() {}
  cardForm = new FormGroup({
    cardnumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    name: new FormControl('', [Validators.required]),
    expiry: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    security: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
  });
  ngOnInit(): void {}
  onSubmit() {
    this.cardData.emit(this.cardForm.value);
  }
  reset() {
    this.cardForm.reset();
  }
}
