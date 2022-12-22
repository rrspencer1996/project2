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



TaskerList: any = []



  @Input() task: any;

  @Output() updateTaskPriorityEvent = new EventEmitter<string>();
  @Output() updateTaskViaIdEvent = new EventEmitter<any>();
  @Output() updateTaskTitleEvent = new EventEmitter<string>();

newTask: string = '';  
newTitle: string = '';
newTaskPriority: string = '';
newTaskViaId: string = '';


ngOnInit() {
  console.log("Task Component Initialized");
  console.log(this.task.taskTitle);
  const section = document.getElementById('bg');
  section!.id = this.task.id;
  switch (this.task.taskPriority) {
    case 'Urgent':
      section!.style.backgroundColor = 'red';
      break;
    case 'High':
      section!.style.backgroundColor = 'orange';
      break;
    case 'Routine':
      section!.style.backgroundColor = 'lightgreen';
      break;
    case 'Low':
      section!.style.backgroundColor = 'lightblue';
      break;  
}
}
// need to write logic for this to react to changed value!
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

changeFName(newName: string): void {
  this.firstName = newName;
}
changeLName(newName: string): void {
  this.lastName = newName;
}
addTask(firstName: string, lastName: string, taskTitle: string, email: string, taskPriority: string, dueDate: string, toDo: string): void {
this.TaskerList.push({firstName: firstName, lastName: lastName, taskTitle: taskTitle, email: email, taskPriority: taskPriority, dueDate: dueDate, toDo: toDo})
}
removeTask(firstName: string, lastName: string, taskTitle: string, email: string, taskPriority: string, dueDate: string, toDo: string): void {
  this.TaskerList.pop({firstName: firstName, lastName: lastName, taskTitle: taskTitle, email: email, taskPriority: taskPriority, dueDate: dueDate, toDo: toDo})
  }
updateTask(): void {
  this.updateTaskViaIdEvent.emit(this.newTask)
}
updateTitle(): void {
 this.updateTaskTitleEvent.emit(this.newTitle)
}

}
