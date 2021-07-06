import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rating = 0;

  increaseRating() {
    this.rating += 1;
  }

  doNothing(){

  }
}
