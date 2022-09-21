import { Component, AfterViewInit, } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


time:number = 36000;
display: any;
interval:any;
startTimer(){
  this.interval = setInterval(() =>{
    if(this.time === 0) {
      this.time--;
    }
    else{
      this.time--;
    }
    this.display = this.transform(this.time)
  },1000);

}

pauseTimer() {
  clearInterval(this.interval);
}
transform(value:number):string{
  var sec_num = value;
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 1) {hours   = 0;}
  if (minutes < 1) {minutes = 0;}
  if (seconds < 1) {seconds = 0;}
  return hours+':'+minutes+':'+seconds;
}

addHour(){
  this.time += 3600
}

removeHour(){
  this.time -= 3600
}

addMin(){
  this.time += 60
}

removeMin(){
  this.time -= 60
}

addSec(){
  this.time += 1
}
removeSec(){
  this.time -= 1
}


  }
