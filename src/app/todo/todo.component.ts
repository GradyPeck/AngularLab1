import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ITodo} from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, ITodo {

  @Input() task: string;

  @Input() completed: boolean;

  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeThis() {
    this.completed = true;
  }

  deleteThis() {
    this.deleted.emit();
  }
}
