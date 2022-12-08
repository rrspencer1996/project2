import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {


  @Input() task: any;

  //@Output()updatePriorityEvent = new EventEmitter<string>()
  
  
  // newPriority: string = '';
// updateSign(): void {
// this.updatePriorityEvent
//}
}
// create a button and field inside each card and use them to update a field inside the card, to accomplish this we have to send data to the list component
// we need a output and variable and a function