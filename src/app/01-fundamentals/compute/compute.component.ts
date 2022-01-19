import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compute',
  templateUrl: './compute.component.html',
  styleUrls: ['./compute.component.css']
})
export class ComputeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  totalVotes = 0; 


  compute(number: number) {
    if (number < 0)
      return 0; 
  
    return number + 1;
  }
  

}
