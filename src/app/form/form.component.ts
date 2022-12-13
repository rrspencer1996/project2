import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

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
  this.regformTest = this.registrationFormForm.value;

}

}
//newTask: Task = new TextTrackList('','','');
