import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

//Another Shorter way of Providing a Service
@Injectable({ providedIn: "root" })
export class UserService {
  //A subect is a special kind of Observable
  activatedEmitter = new Subject<boolean>();
}
