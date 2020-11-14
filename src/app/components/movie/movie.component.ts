import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: [
    trigger('movieAnimation', [
      state('', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('750ms 0s ease-in-out'),
      ]),
    ]),
  ],
})
export class MovieComponent implements OnInit {
  movieState: string = 'ready';

  @Input() movie: any;

  constructor() {}

  ngOnInit() {}
}
