import { Injectable } from '@angular/core';

@Injectable()
export class Task{
  constructor(public name:string,public text:string ){}
}
export class GenProdService {
  
  private data: Task[]=[
    {name:'name',text:"some text"},
    {name:'name',text:"some text"},
    {name:'name',text:"some text"},
    {name:'name',text:"some text"}
    
  ];

  getData():Task[]{
    return this.data;
  }

  addData(name:string,text:string){
    this.data.push(new Task(name,text))
  }
}
