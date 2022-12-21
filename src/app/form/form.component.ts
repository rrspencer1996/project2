import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task } from '../Models/task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
newTask: Task = new Task(0,'','','','','','','');

task: any = [
  {
    id: 1,
    firstName: 'Ricky',
    lastName: 'Bobby',
    email: 'shakeandbake@gmail.com',
    taskTitle: 'Winning',
    taskPriority: 'Urgent',
    dueDate: 'Today',
    todo: 'Yes',
  },
  {
    id: 2,
    firstName: 'john',
    lastName: 'doe',
    email: 'abc@def.com',
    taskTitle: 'placing title here',
    taskPriority: 'routine',
    dueDate: 'Next Tuesday',
    todo: 'No',
  },
  {
    id: 3,
    firstName: 'Jane',
    lastName: 'Austin',
    email: 'PrideandPred@hotmail.com',
    taskTitle: 'Write a book',
    taskPriority: 'Low',
    dueDate: '1874',
    todo: 'No',
  },
  {
    id: 4,
    firstName: 'DJ',
    lastName: 'JazzyJeff',
    email: 'FreshPrince@aol.com',
    taskTitle: 'chillin',
    taskPriority: 'low',
    dueDate: 'Summertime',
    todo: 'No',
  },
  {
    id: 5,
    firstName: 'Baconator',
    lastName: 'Sandwich',
    email: 'highcholestorol@nope.com',
    taskTitle: 'Ending it quickly',
    taskPriority: 'High',
    dueDate: 'Tomarrow',
    todo: 'No',
  },
  {
    id: 6,
    firstName: 'Duke',
    lastName: 'Togo',
    email: 'Golgo13@sniper.com',
    taskTitle: ' Taking the shot',
    taskPriority: 'Urgent',
    dueDate: 'Today',
    todo: 'Yes',
  }

]
constructor(private fb: FormBuilder) {}

registrationFormForm = this.fb.group(
  {
    firstName: ['',Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    lastName: ['',Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    email: ['',Validators.compose([Validators.minLength(3), Validators.maxLength(40), Validators.email, Validators.required])],
    taskTitle: ['',Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    taskPriority: ['',Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    dueDate: ['',Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    todo: ['',Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],

  }
);

get firstName() {
  return this.registrationFormForm.get('firstName')
}
get lastName() {
  return this.registrationFormForm.get('lastName')
}
get email() {
  return this.registrationFormForm.get('email')
}
get taskTitle() {
  return this.registrationFormForm.get('taskTitle')
}
get taskPriority() {
  return this.registrationFormForm.get('taskPriority')
}
get dueDate() {
  return this.registrationFormForm.get('dueDate')
}
get todo() {
  return this.registrationFormForm.get('todo')
}

regformTest: any = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  taskTitle: 'taskTitle',
  taskPriority: 'taskPriority',
  dueDate: 'dueDate',
  todo: 'todo',
}

onSubmit(): void {
  this.task.push({...this.newTask});
  this.regformTest = this.registrationFormForm.value;
console.log(this.newTask + 'created')

}

}
//newTask: Task = new TextTrackList('','','');
