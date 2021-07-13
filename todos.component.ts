import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:any=[];

  inputTodo:string="";

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        content:'First Employee details',completed:false
      },
      {
        content:'Second  Employee details',completed:false
      }
    ]
  }
  toggleDone(id:number){
    this.todos.map((v:any,i:any)=>{
      if(i==id) v.completed=!v.completed;
      return v;
    })
    
  }

  deleteTodo(id:number){
    this.todos=this.todos.filter((v:any,i:any)=>i !==id);
  }

  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    });
  }

}
  


