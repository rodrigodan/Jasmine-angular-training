import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetComponent } from './greet.component';

describe("greet and currencies", ()=>{
    let greetComponent: GreetComponent = new GreetComponent();
    it("should include the name in the message", () =>{
        expect(greetComponent.greet('Rodrigo')).toContain("Rodrigo");
    });
    it("should return the supported currencies", () =>{
        let greetComponent: GreetComponent = new GreetComponent();
        const result = greetComponent.getCurrencies();
        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");

    })
})
