import { Component } from '@angular/core';
import { Tree } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bill-system';

  bill:boolean = false;
  no_of_puff: boolean = false;
  no_OF_dabeli:boolean = false;
  no_OF_vadapav:boolean = false;

  puff:number = 0;
  dabeli:number = 0;
  vadapav:number = 0;

  dabeliPrice:number = 15;
  puffPrice:number = 20;
  vadapavPrice:number = 15;

  totalPrice_puff:number;
  totalPrice_dabeli:number;
  totalPrice_vadapav:number;
  totalPrice:number;

  puffTotal:boolean = false;
  dabeliTotal:boolean = false;
  vadapavTotal:boolean = false;
  allTotal:boolean = false;

  addNofPuff()
  {
    this.no_of_puff = true;
  }
  addNofDabeli()
  {
    this.no_OF_dabeli = true;
  }
  addNofVadapav()
  {
    this.no_OF_vadapav = true;
  }
  
  callpuff(value: number) {
    this.puff =  value;
  }
  calldabeli(value:number)
  {
    this.dabeli = value;
  }
  callvadapav(value:number)
  {
    this.vadapav = value;
  }
  total()
  {
    this.totalPrice_puff =   (this.puff * this.puffPrice); 
    this.totalPrice_dabeli = (this.dabeli * this.dabeliPrice);
    this.totalPrice_vadapav = (this.vadapav * this.vadapavPrice);
    this.totalPrice = this.totalPrice_puff + this.totalPrice_dabeli + this.totalPrice_vadapav;   
    this.bill = true;

    this.puffTotal = true;
    this.allTotal = true;
    this.dabeliTotal = true;  
    this.allTotal = true;
    this.vadapavTotal = true;
    this.allTotal = true;

    if(this.totalPrice_puff <= 0)
    {
      this.puffTotal = false;
    }
    if(this.totalPrice_dabeli <= 0)
    {
      this.dabeliTotal = false;  
    }
    if(this.totalPrice_vadapav <= 0)
    {
      this.vadapavTotal = false;
    }
  }
  PrintBill()
  {
    alert("print successfuly");
  }
}
