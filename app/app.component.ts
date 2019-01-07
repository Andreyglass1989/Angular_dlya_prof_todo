import { Component } from '@angular/core';
import { Model, TodoItem } from './model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model = new Model();

  getName(){
  	return this.model.user;
  }

  getItems(){
  	return this.model.items.filter(function (item) { return !item.done });
  	// filter(item => !item.done);
  }

  addItem(newItem){
  	if (newItem != ""){
  		this.model.items.push(new TodoItem(newItem, false))
  	}
  }
}
