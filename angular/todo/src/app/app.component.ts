import { model, TodoItem } from './Model/model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo';

  model = new model();

  getName() {
    return this.model.user;
  }

  getToDoItems() {
    return this.model.items;
  }

  addItem(newTask) {
    if(null != newTask && newTask != '') {
      this.model.items.push(new TodoItem(newTask, false));
    }
  }

  deleteItem(i) {
    this.model.items.splice(i,1);
  }

}
