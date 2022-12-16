import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges {


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

}

// create a button and field inside each card and use them to update a field inside the card, to accomplish this we have to send data to the list component
// we need a output and variable and a function