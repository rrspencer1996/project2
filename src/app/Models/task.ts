export class Task {

    id: string;
    firstName: string;
    lastName: string;
    taskTitle: string;
    email: string;
    taskPriority: string;
    dueDate: string;
    toDo: string;

    constructor(id: string, firstName: string, lastName: string, taskTitle: string, email: string, taskPriority: string, dueDate: string, toDo: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.taskTitle = taskTitle;
        this.email = email;
        this.taskPriority = taskPriority;
        this.dueDate = dueDate;
        this.toDo = toDo;
    }

}