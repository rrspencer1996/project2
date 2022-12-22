import { Injectable } from '@angular/core';
import { Task } from 'src/app/Models/task';

@Injectable({
  providedIn: 'root'
})

export class MoverService {
  id: number = 0;
  firstName: string = '';
  lastName: string ='';
  taskTitle: string ='';
  email: string ='';
  taskPriority: string = '';
  dueDate: string = '';
  toDo: string = '';


  constructor() {
this.firstName
this.lastName
this.taskTitle
this.email
this.taskPriority
this.dueDate
this.toDo
   }

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
  firstName: 'Mr',
  lastName: 'Rogers',
  taskTitle: 'Thinking Happy Thoughts',
  email: 'changin@shoes.com',
  taskPriority: 'Low',
  dueDate: 'Friday',
  toDo: 'Yes'
},
  {
    id: 3,
    firstName: 'Ninja',
    lastName: 'Turtle',
    taskTitle: 'Making pizza in a sewer',
    email: 'cowabunga@dude.com',
    taskPriority: 'Urgent',
    dueDate: 'ASAP',
    toDo: 'Yes'
},
{
  id: 4,
  firstName: 'Prince',
  lastName: '',
  taskTitle: 'Hit all the high notes',
  email: 'purplerain@forlife.com',
  taskPriority: 'High',
  dueDate: 'Next Monday',
  toDo: 'No'
},
{
  id: 5,
  firstName: 'Douglas',
  lastName: 'Adams',
  taskTitle: 'Explore a new place',
  email: 'fortytwo@answer.com',
  taskPriority: 'Low',
  dueDate: 'Thursday',
  toDo: 'No'
},
{
  id: 6,
  firstName: 'Luke',
  lastName: 'Skywalker',
  taskTitle: 'Buy Lightsaber batteries',
  email: 'usetheforce@luke.com',
  taskPriority: 'High',
  dueDate: 'Tommorrow',
  toDo: 'Yes'
},
{
  id: 7,
firstName: 'Big',
lastName: 'Bird',
taskTitle: 'Give directions to Sesame St.',
email: 'ABC123@PBS.org',
taskPriority: 'High',
dueDate: 'Today',
toDo: 'Yes'
}
]
  // this.id = 1,
  // this.firstName = '',
  // this.lastName = '',
  // this.taskTitle = '',
  // this.email = '', 
  // this.dueDate = '',
  // this.toDo ='',




finList: any = [
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
  taskTitle: 'Practice Bowling',
  email: 'theDude@Abides.com',
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
];
lookUpById: string = '';

returnTask(id:string){
  console.log(id)
  for(let task in this.finList){
    if(id===this.finList[task].taskId){
           this.list.push(this.finList[task]);
        this.finList.splice(task,1);}
  }
}
completeTask(id:string){
  console.log(id)
  for(let task in this.list){
    if(id===this.list[task].taskId){
      // console.log("found it!!")
      this.finList.push(this.list[task]);
        this.list.splice(task,1);}
  }
}

}