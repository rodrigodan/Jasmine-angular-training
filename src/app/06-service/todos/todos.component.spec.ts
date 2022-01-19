import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable,from, empty, throwError  } from 'rxjs';
import { TodoService } from './todo.service';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
    let component: TodosComponent;
    let service: TodoService;
  
    beforeEach(() => {
        service = new TodoService();
        component = new TodosComponent(service);
    });
  
    it('should set todos property with items returned from the server ', () => {

        let todos = [1,2,3]

        spyOn(service, 'getTodos').and.callFake(()=>{
            return from([ todos ]);
        });

        component.ngOnInit();

        expect(component.todos).toBe(todos);
    });

    it('should set todos property with items returned from the server ', () => {
        let spy = spyOn(service, 'add').and.callFake((t:any) =>{
            return empty();
        });
        component.add();
        expect(spy).toHaveBeenCalled();
    })
    it('should return the new todo returned from the server ', () => {
        let todo = {id : 1};
        let spy = spyOn(service, 'add').and.returnValue(from([todo]));
        component.add();
        expect(spy).toHaveBeenCalled();
    })

    it('should set the message property if server returns error when adding a new todo', () => {
        let error = 'error from the server';
        let spy = spyOn(service, 'add').and.returnValue(throwError(error));
        component.add();
        expect(component.message).toBe(error);
    })
    it('should call the server to delete a todo item if the user confirms', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        let spy = spyOn(service, 'delete').and.returnValue(empty());
        component.delete(1);
        expect(spy).toHaveBeenCalledWith(1);
    });
    it('should NOT call the server to delete a todo item if the user cancels', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        let spy = spyOn(service, 'delete').and.returnValue(empty());
        component.delete(1);
        expect(spy).not.toHaveBeenCalled();
    });
});
