import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  msj:any = {}
  

  constructor(public navCtrl: NavController,
    private sms: SMS) {

  }

  send(){
   /* console.log(this.msj);
    console.log(this.msj.txt);
    this.sms.send(this.msj.text,this.msj.num); */


    var options={
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
           intent: ''  // Opens Default sms app
          //intent: '' // Sends sms without opening default sms app
        }
    }
      this.sms.send('6181003821', 'Mensaje de prueba',options)
        .then(()=>{
          alert("success");
        },()=>{
          alert("failed");
        });
        this.sms.send('6182134740', 'Mensaje de prueba',options)
        .then(()=>{
          alert("success");
        },()=>{
          alert("failed");
        });
        this.sms.send('6188007250', 'Mensaje de prueba',options)
        .then(()=>{
          alert("success");
        },()=>{
          alert("failed");
        });
        this.sms.send('6181510261', 'Mensaje de prueba',options)
        .then(()=>{
          alert("success");
        },()=>{
          alert("failed");
        });
}



  }


