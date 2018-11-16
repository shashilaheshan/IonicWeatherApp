import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  current:any=[];
  location:any =[];
city:any="";
url:any="";
name:any="";
region:any="";
country:any="";
lat:any="";
lon:any="";
time:any="";
temp_c:any="";
temp_f:any="";
pressure:any="";
humidity:any="";
  constructor(public navCtrl: NavController,public http:Http) {

  }
  ionViewDidLoad(){

    this.GetData();
  }
        GetData(){
          if(this.city){
            let url="http://api.apixu.com/v1/current.json?key=your_api_key&q=";
            this.http.get(url+this.city).map(res => res.json()).subscribe(data => {
              
              this.current=data.current;
              this.location=data.location;
              // console.log(data);
              console.log(this.current.condition.icon);
              this.url=this.current.condition.icon;
              this.name=this.location.name;
              this.region=this.location.region;
              this.country=this.location.country;
              this.lat=this.location.lat;
              this.lon=this.location.lon;
              this.time=this.location.localtime;
              this.temp_c=this.current.temp_c;
              this.temp_f=this.current.temp_f;
              this.pressure=this.current.pressure_in;
              this.humidity=this.current.humidity;
           
          });
            
          }
         
           

        }
}
