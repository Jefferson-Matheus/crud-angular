import { Component } from '@angular/core';

import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
