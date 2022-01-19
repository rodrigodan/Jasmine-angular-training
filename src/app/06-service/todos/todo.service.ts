
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
// import 'rxjs/add/operator/map';

export class TodoService { 
  constructor() { 
  }

  add(todo: any) {
    //return this.HttpClientpost('...', todo).map(r => r.json());
    // return from([ [100,200,300] ]);
    return from([{id : 10}])
  }

  getTodos() { 
    //return this.HttpClientget('...').map(r => r.json());
    return from([ [100,200,300] ]);
  }

  delete(id: any) {
    //return this.HttpClientdelete('...').map(r => r.json());
    return from([ [100,200,300] ]);
  }
}