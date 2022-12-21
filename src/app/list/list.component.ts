import { Component } from '@angular/core';
import { Task } from '../Models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  firstName: string = '';
  lastName: string ='';
  taskTitle: string ='';
  email: string ='';
  taskPriority: string = '';
  dueDate: string = '';
  toDo: string = '';

  stringToDisplay: string = '';

    list: any = [
      {
        id: 1,
        firstName: 'Rob',
        lastName: 'Spencer',
        taskTitle: 'empty trash',
        email: 'rrspencer@live.com',
        taskPriority: 'High',
        dueDate: 'Today',
        toDo: 'Yes'
    },
    {
      id: 2,
      firstName: 'Joe',
      lastName: 'Jackson',
      taskTitle: 'do dishes',
      email: 'abc123@email.com',
      taskPriority: 'Low',
      dueDate: 'Friday',
      toDo: 'Yes'
  },
      {
        id: 3,
        firstName: 'Warren',
        lastName: 'Buffet',
        taskTitle: 'Make Money',
        email: 'gimmedalootz@money.com',
        taskPriority: 'Urgent',
        dueDate: 'ASAP',
        toDo: 'Yes'
    },
    {
      id: 4,
      firstName: 'UmyBoi',
      lastName: 'Blue',
      taskTitle: 'clean bathroom',
      email: 'imgonnalive@life.com',
      taskPriority: 'High',
      dueDate: 'Next Monday',
      toDo: 'No'
    },
    {
      id: 5,
      firstName: 'The Dude',
      lastName: 'Lebowski',
      taskTitle: 'Abide',
      email: 'imhigh@dude.com',
      taskPriority: 'Low',
      dueDate: 'Thursday',
      toDo: 'No'
    },
    {
      id: 6,
      firstName: 'Peter',
      lastName: 'Parker',
      taskTitle: 'fight evil',
      email: 'therealspiderman@webslinger.com',
      taskPriority: 'High',
      dueDate: 'Tommorrow',
      toDo: 'Yes'
    },
    {
      id: 7,
    firstName: 'Chadwick',
    lastName: 'Boseman',
    taskTitle: 'protect vibranium',
    email: 'wakanda@forever.com',
    taskPriority: 'High',
    dueDate: 'Today',
    toDo: 'Yes'
    }
  ]
    //create a funtion that listens for fires from the emitter for LISTS



addTask(): void {
  this.list.push(
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
updateTitle(newTitle: string, index: number) {
  this.list[index].taskTitle = newTitle
}

removeTask(): void {
  this.list.pop(
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

addtaskTitleUsingModel(): void {
    //   // inside a function, so must use let/const
    //   // type of the variable is the model itself -- Card
    //   // then the new keyword and the constructor
const newTask: Task = new Task(this.list.length + 1,
this.firstName,
this.lastName,
this.taskTitle,
this.email,
this.taskPriority,
this.dueDate,
this.toDo)


this.list.push(newTask);
}
  

    updateString(newString: string): void{
      this.stringToDisplay = newString;
      }
  
    // // a function for updating a card 
    // // when the user clicks the button in the card
 updatefirstName(newfirstName: string, index: number) {
 this.list[index].firstName = newfirstName;
 }
  
    // // updating the card via ID
// updateTaskViaId(newTask: any): void {

// for (let task of this.list) {

// if (task.id === newfirstName[1])

// task.firstName = newfirstName[0];
// }
// }
  
taskNumber: number = 0;
newtaskPriority: string = '';



changetaskPriority() {
for (let task of this.list) {
if (task.id === this.taskNumber)
task.taskPriority = this.newtaskPriority;
}

  }
updateTaskViaId(newTask: any): void{
 for (let task of this.list) {
  if (task.id === newTask[1])
  task.taskTitle = newTask[0];
 }
}
}
