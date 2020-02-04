import { Pipe, PipeTransform, Input } from '@angular/core';
import {ITodo} from './app.component';
import { stringify } from 'querystring';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {
  transform(value: any, filterString : string): any {

    //console.log(value);

    if ( !filterString ) {
      return value;
    }

    let todos : ITodo[] = [];
    for(let vally of value) {
      if(vally.task.includes(filterString)){
        //console.log(vally);
        todos.push(vally);
      }
    }
    return todos;
  }

}
