import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges {
  firstName: string = '';
  lastName: string ='';
  taskTitle: string ='';
  email: string ='';
  taskPriority: string = '';
  dueDate: string = '';
  toDo: string = '';


TaskerOne: any = {
  firstName: 'Rob',
  lastName: 'Spencer',
  taskTitle: 'empty trash',
  email: 'rrspencer@live.com',
  taskPriority: 'High',
  dueDate: 'Today',
  toDo: 'Yes'
}

TaskerTwo: any = {
firstName: 'Joe',
lastName: 'Jackson',
taskTitle: 'do dishes',
email: 'abc123@email.com',
taskPriority: 'Low',
dueDate: 'Friday',
toDo: 'Yes'
}

 TaskerThree: any = {
  firstName: 'Warren',
  lastName: 'Buffet',
  taskTitle: 'Make Money',
  email: 'gimmedalootz@money.com',
  taskPriority: 'Urgent',
  dueDate: 'ASAP',
  toDo: 'Yes'
}

TaskerList: any = [
{
  firstName: 'Rob1',
  lastName: 'Spencer',
  taskTitle: 'empty trash',
  email: 'rrspencer@live.com',
  taskPriority: 'High',
  dueDate: 'Today',
  toDo: 'Yes'
},

{
firstName: 'Joe1',
lastName: 'Jackson',
taskTitle: 'do dishes',
email: 'abc123@email.com',
taskPriority: 'Low',
dueDate: 'Friday',
toDo: 'Yes'
},

{
  firstName: 'Warren1',
  lastName: 'Buffet',
  taskTitle: 'Make Money',
  email: 'gimmedalootz@money.com',
  taskPriority: 'Urgent',
  dueDate: 'ASAP',
  toDo: 'Yes'
}
];

  @Input() task: any;

  @Output() updateTaskPriorityEvent = new EventEmitter<string>();
  @Output() updateTaskViaIdEvent = new EventEmitter<any>();
  
  
  newTaskPriority: string = '';
 newTaskViaId: string = '';
// this.updatePriorityEvent
//}
ngOnInit() {
  console.log("Task Component Initialized");
  console.log(this.task.taskPriority);
  const section = document.getElementById('bg');
  section!.id = this.task.id;
  switch (this.task.element) {
    case 'Urgent':
      section!.style.backgroundColor = 'red';
      break;
    case 'High':
      section!.style.backgroundColor = 'orange';
      break;
    case 'Routine':
      section!.style.backgroundColor = 'lightgray';
      break;
    case 'Low':
      section!.style.backgroundColor = 'blue';
      break;  
}
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('Inside ngOnChanges method...');
  console.log(changes);
}
updateTaskPriority(): void {
  this.updateTaskPriorityEvent.emit(this.newTaskPriority);
}
updateTaskViaId(): void {
  this.updateTaskViaIdEvent.emit([this.newTaskViaId, this.task.id]);
}

changeName(newName: string): void {
  this.firstName = newName;
}
addTask(firstName: string, lastName: string, taskTitle: string, email: string, taskPriority: string, dueDate: string, toDo: string): void {
this.TaskerList.push({firstName: firstName, lastName: lastName, taskTitle: taskTitle, email: email, taskPriority: taskPriority, dueDate: dueDate, toDo: toDo})
}
}

// create a button and field inside each card and use them to update a field inside the card, to accomplish this we have to send data to the list component
// we need a output and variable and a function