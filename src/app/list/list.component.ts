import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  priority: string = '';
  owner: string = '';
  dueDate: string = '';
    list: any = [
      {
        priority: 'Urgent',
        owner: 'Rob',
        dueDate: 'Tuesday'
    },
    {
      priority: 'Urgent',
      owner: 'Rob',
      dueDate: 'Tuesday'
  },
      {
        priority: 'Urgent',
        owner: 'Rob',
        dueDate: 'Tuesday'
    }
    ];
  }

