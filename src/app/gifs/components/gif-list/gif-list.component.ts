import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";

@Component({
  selector: 'gif-list',
  standalone: true,
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html'
})
export class GifListComponent { 
  gifs = input.required<string[]>();
}
