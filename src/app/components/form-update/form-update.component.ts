import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Item } from '../../../../item/itemInterface';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-form-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css'
})
export class FormUpdateComponent implements OnInit{
  @Output() updatedItem = new EventEmitter<Item>();

  id:any = '';

  item: Item = {
    name: ''
  }


  constructor(private route: ActivatedRoute, 
    private itemService: HttpServiceService,
  private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.id = param.get('id');
      console.log(this.id);
    })
  }

  update(){
    this.itemService.updateItem(this.item,this.id).subscribe(response => {
      this.updatedItem.emit(response);
      this.goToHome();
    })
  }
 
  goToHome(){
    this.router.navigate(['/']);
  }
  
}
