import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit{

    @Input() card: Card;

    title: string = 'My card Title';
    text: string = 'My sample text';
    array: Array<number> = [1, 1, 2, 3, 5, 8, 13];
    imgUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
    disabled: boolean = false;
    textColor: string = 'blue';

    ngOnInit(): void {
        setTimeout(()=> {
            this.imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png';
            this.disabled = true;
        },3000)
    }

    changeTitle(): void {
        this.title = 'title has been changed';
    }

    changeHandler(): void {
        console.log(this.title);
    }

    /* inputHandler(value: string) {
        this.title = value
    } */
}
