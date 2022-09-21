import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss']
})
export class BitcoinComponent implements OnInit {

  title = 'bitcoin-app';
  data:any = []
  temp:any = []
  selectEur: number = 0
  selectUsd: number = 0
  selectGbp: number = 0
  bitcoin:string | null = null
  constructor(private http: HttpClient){
    setInterval(() => {

      this.getData()

       if(this.temp.bpi.EUR.rate < this.data.bpi.EUR.rate){
          this.selectEur=1
        }
        else if(this.temp.bpi.EUR.rate > this.data.bpi.EUR.rate){
          this.selectEur=2
        }


         if(this.temp.bpi.EUR.rate < this.data.bpi.EUR.rate){
          this.selectUsd=1
        }
        else if(this.temp.bpi.EUR.rate > this.data.bpi.EUR.rate){
          this.selectUsd=2
        }



         if(this.temp.bpi.EUR.rate < this.data.bpi.EUR.rate){
          this.selectGbp=1
        }
        else if(this.temp.bpi.EUR.rate > this.data.bpi.EUR.rate){
          this.selectGbp=2
        }



  }, 1000);

  setInterval(() => {
    const url ='https://api.coindesk.com/v1/bpi/currentprice.json'
    this.http.get(url).subscribe((res)=>{
      this.temp = res
    })

}, 5000);
  }


  getData(){
    const url ='https://api.coindesk.com/v1/bpi/currentprice.json'
    this.http.get(url).subscribe((res)=>{
      this.data = res
    })

  }

  ngOnInit(): void {
    this.temp=[]
  }
}
