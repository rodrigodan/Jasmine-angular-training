import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public getCurrencies() { 
    return ['USD', 'AUD', 'EUR'];
  }

  
public greet(name: string) { 
    return 'Welcome ' + name + '!'; 
  }
  

}
