import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task } from '../Models/task';
import { MoverService } from 'Services/mover.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  serviceFList: any = this.moverService.finList;

  constructor(private router: Router, public moverService: MoverService) {

  }
  firstName: string = '';
  lastName: string ='';
  taskTitle: string ='';
  email: string ='';
  taskPriority: string = '';
  dueDate: string = '';
  toDo: string = '';

  taskId: number = 0;
newfirstName: string = '';
newlastName: string = '';
newtaskTitle: string = '';
newemail: string = '';
newtaskPriority: string = '';
newdueDate: string = '';
newtoDo: string = '';

  stringToDisplay: string = '';
  returnTask(){
    this.moverService.returnTask(this.serviceFList.taskId);
    this.router.navigateByUrl('/list');
  }

  changetaskPriority(){
    for (let task of this.moverService.finList){
      if (task.id === this.taskId)
      task.taskPriority = this.newtaskPriority;
    }
  }
  changedueDate(){
    for (let task of this.moverService.finList){
      if (task.id === this.taskId)
      task.dueDate = this.newdueDate;
    }
  }
  changetoDo(){
    for (let task of this.moverService.finList){
      if (task.id === this.taskId)
      task.toDo = this.newtoDo;
    }
  }
  changeemail(){
    for (let task of this.moverService.finList){
      if (task.id === this.taskId)
      task.email = this.newemail;
    }
  }
  changetaskTitle(){
    for (let task of this.moverService.finList){
      if (task.id === this.taskId)
      task.taskTitle = this.newtaskTitle;
    }
  }
  changelastName(){
    for (let task of this.moverService.finList){
      if (task.id === this.taskId)
      task.lastName = this.newlastName;
    }
  }
  changefirstName(){
    for (let task of this.moverService.finList){
      if (task.id === this.taskId)
      task.firstName = this.newfirstName;
    }
  };
  removeTask(): void{
    this.moverService.finList.pop(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        taskTitle: this.taskTitle,
        email: this.email,
        taskPriority: this.taskPriority,
        dueDate: this.dueDate,
        toDo: this.toDo
      }
    )
  }
  addTask(): void {
    this.moverService.finList.push(
        {
          id:  this.moverService.finList.length + 1, 
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
  }