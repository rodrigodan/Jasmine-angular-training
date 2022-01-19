import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
    let component: TodoFormComponent; 
  
    beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder());
    });
  
    it('should create a form with 2 controls', () => {
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });
  
    it('Should make the name control required', () => {
        let control = component.form.controls['name'];
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
  });
