import { Component, OnInit} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent  implements OnInit{
   users: string[];
 

   constructor (private usersService:UsersService){}
  
   onSetToActive(id: number) {
     this.usersService.onSetToActive(id);
   }

   /*
   Making calls to APIS should happen at ngOnit
   Constructor is best suited for properties of the class.
   */
   ngOnInit(){
    this.users = this.usersService.inactiveUsers;
   }


}
