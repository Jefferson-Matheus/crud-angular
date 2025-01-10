import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from '../../services/http-service.service';

import { Item } from '../../../../item/itemInterface';

import { CommonModule } from '@angular/common';
import { FormComponent } from "../form/form.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormComponent, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {

  items:Item[] = [];


  constructor(private itemService:HttpServiceService){}

  ngOnInit(): void {
    this.itemService.getAllDate().subscribe(response => {
      this.items = response;
      console.log(this.items);
    },error => {
      console.log(error);
    })
  }

  delete(id:any){
    this.itemService.deleteDate(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }

  onItemCreated(newItem: Item) {
    this.items.push(newItem);
  }

  onUpdatedItem(updatedItem: Item){
    this.items.push(updatedItem);
  }

}
