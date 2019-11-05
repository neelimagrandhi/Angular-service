import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { apiService } from '../services/api.service';



@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"]
})
export class homeComponent{
    public users:any;
   
    id;
    constructor(private service:apiService, private router:Router){
        
        this.getUsers();
    }
    getUsers(){
        this.service.fetchUsers().subscribe(
            res=>{
                this.users=res;
            }
        )    
    }
}