import { Component } from '@angular/core';

export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'my-app';
  toggle: boolean = true;

  cards: Card[] = [
    {title: 'card 1', text: 'this is card number 1'},
    {title: 'second card 2', text: 'this is card number 2'},
    {title: 'last card 3', text: 'this is card number 3'}
  ];

  toggleCards(): void {
    this.toggle = !this.toggle
  }
}
