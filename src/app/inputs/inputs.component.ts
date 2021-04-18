import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() name: string;
  constructor() {}

  ngOnInit(): void {}
}
