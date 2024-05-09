import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data = '';
  ngOnInit(): void {
    fromEvent<CustomEvent<string>>(window, 'event').subscribe(
      (event: CustomEvent<string>) => {
        this.data = event.detail;
      }
    );
  }
  title = 'host-app';
}
