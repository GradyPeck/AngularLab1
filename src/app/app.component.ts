import { Component } from '@angular/core';

export interface ITodo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab';

  todos: ITodo[] = [
    {
      task: "drink coffee",
      completed: false
    },
    {
      task: "fret",
      completed: true
    },
    {
      task: "feed the snails",
      completed: true
    },
    {
      task: "water the plants",
      completed: false
    }
  ]

  tasky : string = '';

  addTask() {
 //   let adder = <HTMLInputElement>document.getElementById("addy");
    if(this.tasky != "") {
      this.todos = [...this.todos, {task: this.tasky, completed: false}];
      this.tasky = "";
    }
  }

  deleteTodo(indy : number) {
    console.log(indy);
    this.todos = [...(this.todos.slice(0, indy)), ...(this.todos.slice(indy + 1, this.todos.length))];
  }
}
