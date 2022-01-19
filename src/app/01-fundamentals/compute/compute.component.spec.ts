import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeComponent } from './compute.component';

describe('compute', ()=>{
    it('should return 1 if input is negative', ()=>{
        let computeComponent: ComputeComponent = new ComputeComponent();
        const result = computeComponent.compute(-1);
        expect(result).toBe(0);
    })
}) // suite

// describe('TodosComponent', () => {
//     let component: TodosComponent;
  
//     beforeEach(() => {
//     });
  
//     it('', () => {
//     });
// });



