import { Component, OnInit } from '@angular/core';
import {GenProdService,Task} from '../../service/gen-prod.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers:[GenProdService]
})
export class AddProductComponent implements OnInit {
  items:Task[] = [];
  
  constructor(private genProdService:GenProdService) { }
  
  addItem(name: string, text: string){
         
        this.genProdService.addData(name, text);
  }
  
    ngOnInit() {
    this.items = this.genProdService.getData();
  }

}
