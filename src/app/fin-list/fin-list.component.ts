import { Component } from '@angular/core';
import { Task } from '../Models/task';
import { TaskerComponent } from '../tasker/tasker.component';

@Component({
  selector: 'app-fin-list',
  templateUrl: './fin-list.component.html',
  styleUrls: ['./fin-list.component.css']
})
export class FinListComponent {
  firstName: string = '';
  lastName: string ='';
  taskTitle: string ='';
  email: string ='';
  taskPriority: string = '';
  dueDate: string = '';
  toDo: string = '';

  stringToDisplay: string = '';

  fin_List: any = [
    {
      id:1,
      firstName: 'Lamar',
      lastName: 'Bland',
      taskTitle: 'walk dog',
      email: 'lbland123@skillstorm.com',
      taskPriority: 'Low',
      dueDate: 'Wednesday',
      toDo: 'Yes'
  },
  {
    id:2,
    firstName: 'Joe',
    lastName: 'Jackson',
    taskTitle: 'do dishes',
    email: 'abc123@email.com',
    taskPriority: 'Low',
    dueDate: 'Friday',
    toDo: 'Yes'
},
    {
      id:3,
      firstName: 'Warren',
      lastName: 'Buffet',
      taskTitle: 'Make Money',
      email: 'gimmedalootz@money.com',
      taskPriority: 'Urgent',
      dueDate: 'ASAP',
      toDo: 'Yes'
  },
  {
    id:4,
    firstName: 'UmyBoi',
    lastName: 'Blue',
    taskTitle: 'clean bathroom',
    email: 'imgonnalive@life.com',
    taskPriority: 'High',
    dueDate: 'Next Monday',
    toDo: 'No'
  },
  {
    id:5,
    firstName: 'The Dude',
    lastName: 'Lebowski',
    taskTitle: 'Abide',
    email: 'imhigh@dude.com',
    taskPriority: 'Low',
    dueDate: 'Thursday',
    toDo: 'No'
  },
  {
    id:6,
    firstName: 'Peter',
    lastName: 'Parker',
    taskTitle: 'fight evil',
    email: 'therealspiderman@webslinger.com',
    taskPriority: 'High',
    dueDate: 'Tommorrow',
    toDo: 'Yes'
  },
  {
    id:7,
  firstName: 'Chadwick',
  lastName: 'Boseman',
  taskTitle: 'protect vibranium',
  email: 'wakanda@forever.com',
  taskPriority: 'High',
  dueDate: 'Today',
  toDo: 'Yes'
  }
]

}
