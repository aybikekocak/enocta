import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitcoin-app';
  data:any = []
  bitcoin:string | null = null
  constructor(private http: HttpClient){}

}
