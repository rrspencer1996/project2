import { Component } from '@angular/core';
import { MoverService } from 'Services/mover.service';
import { Task } from '../Models/task';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

serviceList: any = this.moverService.list;

  constructor(private router: Router, public moverService: MoverService) {
    
  }

  firstName: string = '';
  lastName: string ='';
  taskTitle: string ='';
  email: string ='';
  taskPriority: string = '';
  dueDate: string = '';
  toDo: string = '';

taskId: string = '0';
newfirstName: string = '';
newlastName: string = '';
newtaskTitle: string = '';
newemail: string = '';
newtaskPriority: string = '';
newdueDate: string = '';
newtoDo: string = '';

  stringToDisplay: string = '';

completeTask(){
    this.moverService.completeTask(this.serviceList.taskId);
    this.router.navigateByUrl('/form');
}
addTask(): void {
  this.moverService.list.push(
      {
        id:  (this.moverService.list.length + 1).toString(), 
        firstName: this.firstName,
        lastName: this.lastName,
        taskTitle: this.taskTitle,  
        email: this.email,
        taskPriority: this.taskPriority,
        dueDate: this.dueDate,
        toDo: this.toDo
      }
  );
}
updateTitle(newTitle: string, index: number) {
  this.moverService.list[index].taskTitle = newTitle
}

removeTask(): void {
  this.moverService.list.pop(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        taskTitle: this.taskTitle,  
        email: this.email,
        taskPriority: this.taskPriority,
        dueDate: this.dueDate,
        toDo: this.toDo
      }
  );
}

    updateString(newString: string): void{
      this.stringToDisplay = newString;
      }
  

 updatefirstName(newfirstName: string, index: number) {
  this.moverService.list[index].firstName = newfirstName;
 }
  
changefirstName(){
  for (let task of this.moverService.list){
    if (task.id === this.taskId)
    task.firstName = this.newfirstName;
  }
}
changelastName(){
  for (let task of this.moverService.list){
    if (task.id === this.taskId)
    task.lastName = this.newlastName;
  }
}
changetaskTitle(){
  for (let task of this.moverService.list){
    if (task.id === this.taskId)
    task.taskTitle = this.newtaskTitle;
  }
}
changeemail(){
  for (let task of this.moverService.list){
    if (task.id === this.taskId)
    task.email = this.newemail;
  }
}
changetaskPriority(){
  for (let task of this.moverService.list){
    if (task.id === this.taskId)
    task.taskPriority = this.newtaskPriority;
  }
}
changedueDate(){
  for (let task of this.moverService.list){
    if (task.id === this.taskId)
    task.dueDate = this.newdueDate;
  }
}
changetoDo(){
  for (let task of this.moverService.list){
    if (task.id === this.taskId)
    task.toDo = this.newtoDo;
  }
}
}
