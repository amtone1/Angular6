import { Component } from '@angular/core';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular 6 Example';
  oneWayData = "Hello I am bond only in one direction";
  bindType="Two Way Data Binding";
 
}
