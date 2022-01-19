import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComputeComponent } from './01-fundamentals/compute/compute.component';
import { GreetComponent } from './02-arrays-and-strings/greet/greet.component';
import { VoteComponent } from './03-setup-and-teardown/vote/vote.component';
import { TodoFormComponent } from './04-forms/todo-form/todo-form.component';
import { TodosComponent } from './06-service/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputeComponent,
    GreetComponent,
    VoteComponent,
    TodoFormComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
