import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
date:any;
constructor(){
  let today:any = new Date();
  let changedDate:any = '';
  let pipe = new DatePipe('en-US');

   let ChangedFormat = pipe.transform(today, 'dd/MM/YYYY');
   changedDate = ChangedFormat;
    console.log(changedDate);
    this.date=changedDate;
}


}


