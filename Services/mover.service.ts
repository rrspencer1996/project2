import { Injectable } from '@angular/core';


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
    toDo: 'Open'
},
{
  id: 2,
  firstName: 'Mr',
  lastName: 'Rogers',
  taskTitle: 'Thinking Happy Thoughts',
  email: 'changin@shoes.com',
  taskPriority: 'Routine',
  dueDate: 'Friday',
  toDo: 'Open'
},
  {
    id: 3,
    firstName: 'Ninja',
    lastName: 'Turtle',
    taskTitle: 'Making pizza in a sewer',
    email: 'cowabunga@dude.com',
    taskPriority: 'Urgent',
    dueDate: 'ASAP',
    toDo: 'Open'
},
{
  id: 4,
  firstName: 'Prince',
  lastName: '',
  taskTitle: 'Hit all the high notes',
  email: 'purplerain@forlife.com',
  taskPriority: 'High',
  dueDate: 'Next Monday',
  toDo: 'Open'
},
{
  id: 5,
  firstName: 'Douglas',
  lastName: 'Adams',
  taskTitle: 'Explore a new place',
  email: 'fortytwo@answer.com',
  taskPriority: 'Low',
  dueDate: 'Thursday',
  toDo: 'Open'
},
{
  id: 6,
  firstName: 'Luke',
  lastName: 'Skywalker',
  taskTitle: 'Buy Lightsaber batteries',
  email: 'usetheforce@luke.com',
  taskPriority: 'Routine',
  dueDate: 'Tommorrow',
  toDo: 'Open'
},
{
  id: 7,
firstName: 'Big',
lastName: 'Bird',
taskTitle: 'Give directions to Sesame St.',
email: 'ABC123@PBS.org',
taskPriority: 'Urgent',
dueDate: 'Today',
toDo: 'Open'
}
]





finList: any = [
  {
    id: 1,
    firstName: 'Lamar',
    lastName: 'Bland',
    taskTitle: 'walk dog',
    email: 'lbland123@skillstorm.com',
    taskPriority: 'Urgent',
    dueDate: 'Wednesday',
    toDo: 'Complete'
},
{
  id: 2,
  firstName: 'Joe',
  lastName: 'Jackson',
  taskTitle: 'do dishes',
  email: 'abc123@email.com',
  taskPriority: 'Low',
  dueDate: 'Friday',
  toDo: 'Complete'
},
  {
    id: 3,
    firstName: 'Warren',
    lastName: 'Buffet',
    taskTitle: 'Make Money',
    email: 'gimmedalootz@money.com',
    taskPriority: 'Urgent',
    dueDate: 'Routine',
    toDo: 'Complete'
},
{
  id: 4,
  firstName: 'UmyBoi',
  lastName: 'Blue',
  taskTitle: 'clean bathroom',
  email: 'imgonnalive@life.com',
  taskPriority: 'High',
  dueDate: 'Next Monday',
  toDo: 'Complete'
},
{
  id: 5,
  firstName: 'The Dude',
  lastName: 'Lebowski',
  taskTitle: 'Practice Bowling',
  email: 'theDude@Abides.com',
  taskPriority: 'Low',
  dueDate: 'Thursday',
  toDo: 'Complete'
},
{
  id: 6,
  firstName: 'Peter',
  lastName: 'Parker',
  taskTitle: 'fight evil',
  email: 'therealspiderman@webslinger.com',
  taskPriority: 'Routine',
  dueDate: 'Tommorrow',
  toDo: 'Complete'
},
{
  id: 7,
firstName: 'Chadwick',
lastName: 'Boseman',
taskTitle: 'protect vibranium',
email: 'wakanda@forever.com',
taskPriority: 'High',
dueDate: 'Today',
toDo: 'Complete'
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
  console.log(id + "TASKIDPASSEDIN")
  for(let task in this.list){
    if(id==this.list[task].taskId){
      this.finList.push(this.list[task]);
        this.list.splice(task,1);}
  }
}

}