import { Component } from "@angular/core";
import { apiService } from '../services/api.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-useredit",
    templateUrl: "useredit.component.html",
    styleUrls: ["useredit.component.scss"]
})

export class Usereditcomponent{
    public currentuser:any;
    public id:any;
    constructor(private route:ActivatedRoute,private service:apiService){
        this.route.params.subscribe(
            (res)=>{
                this.id=res.id;
                this.fetchdata();
            }
        )
    }
    fetchdata(){
        return this.service.getuserInfo(this.id).subscribe(
            res=>{
                this.currentuser=res;
                console.log(this.currentuser)
            }
        )
    }
}
