import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QR Code Generator';

   myAngularxQrCode: string = "";

  constructor () {
    this.myAngularxQrCode = "http://localhost:4200";
  }
}


