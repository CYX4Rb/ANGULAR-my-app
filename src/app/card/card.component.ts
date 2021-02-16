import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})

export class CardComponent {
    title = 'My card Title'
    text = 'My sample text'
}