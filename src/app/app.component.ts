import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QR Code Generator';

  @ViewChild("myqr")elm!: ElementRef<HTMLImageElement>;
  

  ngOnInit(): void{
    console.log(location)
    this.Url = location.href;
  }

  qrsend(){
    this.Url = this.myAngularxQrCode;
    console.log(this.Url)
  }

  Url: string = "";

   myAngularxQrCode: string = "";

  constructor (private router : Router) {
    this.myAngularxQrCode = "";
  }

  saveAsImage(parent: any) {
    // fetches base 64 date from image
    const parentElement = parent.el.nativeElement.querySelector("qrcode").src;

    // converts base 64 encoded image to blobData
    let blobData = this.convertBase64ToBlob(parentElement);

      const blob = new Blob([blobData], { type: "image/png" });
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Qrcode';
      link.click();
    

  }

  private convertBase64ToBlob(Base64Image: any) {
    // SPLIT INTO TWO PARTS
    const parts = Base64Image.split(';base64,');
    // HOLD THE CONTENT TYPE
    const imageType = parts[0].split(':')[1];
    // DECODE BASE64 STRING
    const decodedData = window.atob(parts[1]);
    // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
    const uInt8Array = new Uint8Array(decodedData.length);
    // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // RETURN BLOB IMAGE AFTER CONVERSION
    return new Blob([uInt8Array], { type: imageType });
  }

}


