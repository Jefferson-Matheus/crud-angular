import { Component, EventEmitter, Output, output } from '@angular/core';

import { HttpServiceService } from '../../services/http-service.service';
import { Item } from '../../../../item/itemInterface';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() itemCreated = new EventEmitter<Item>();

  item: Item= {
    name: ""
  }

  constructor(private itemService: HttpServiceService){}


  create(){
    this.itemService.createItem(this.item).subscribe(response => {
      this.itemCreated.emit(response);
    })
  }
}
