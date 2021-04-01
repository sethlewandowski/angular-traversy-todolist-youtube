import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { HeaderComponent } from './component/layout/header/header.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
