import { RestapiServiceProvider } from './../../providers/restapi-service/restapi-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[RestapiServiceProvider]
})
export class HomePage {
  public panchang:any
  
  constructor(public navCtrl: NavController,public restapiServiceProvider:RestapiServiceProvider) {

  }
  PanchangClicked(event){
    this.restapiServiceProvider.load().then(data=>{
      this.panchang = data;
      document.getElementById("card").textContent = "Today: " + this.panchang["dtoday"] + 
                                                    " Karan:" + this.panchang["dkarana"] + 
                                                    " Nakshatra:" + this.panchang["dnakshatra"] + 
                                                    " Paksha:" + this.panchang["dpaksha"] + 
                                                    " Rashi:" + this.panchang["drashi"] +
                                                    " Tithi:" + this.panchang["dtithi"] +
                                                    " Yoga:" + this.panchang["dyoga"]  ;
      
      console.log(this.panchang);
    });
  }
}
  