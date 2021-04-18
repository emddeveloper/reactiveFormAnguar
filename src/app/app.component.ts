import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cardDetails: {};
  getCardData(value: {}) {
    this.cardDetails = value;
  }
}
