import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
