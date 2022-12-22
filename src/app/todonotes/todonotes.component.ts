import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todonotes',
  templateUrl: './todonotes.component.html',
  styleUrls: ['./todonotes.component.css'],
})
export class TodonotesComponent implements OnInit {
  tasks: any = [];
  constructor() {}

  ngOnInit(): void {}
  newTask(content: string) {
    if (content != '') {
      this.tasks.push({ id: this.tasks.length, title: content });
      console.log('tasks', this.tasks);
    }
  }
  removeTask(id: number) {
    // here item.id includes(showing) all indexes of tasks array excluding whatever selected id
    // i.e particular id will be removed(filter)
    this.tasks = this.tasks.filter((item: { id: number }) => item.id != id);
  }
  removeAll() {
    this.tasks = [];
  }
}
