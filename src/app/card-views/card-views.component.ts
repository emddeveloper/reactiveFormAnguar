import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-views',
  templateUrl: './card-views.component.html',
  styleUrls: ['./card-views.component.css'],
})
export class CardViewsComponent implements OnInit {
  @Input() cardDetails: any;
  constructor() {}

  ngOnInit(): void {}
}
