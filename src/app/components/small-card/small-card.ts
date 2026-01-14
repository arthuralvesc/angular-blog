import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css',
})
export class SmallCard {
  @Input() cardImage: string = "";
  @Input() cardTitle: string = "";
  @Input() cardUrl: string = "";
}
