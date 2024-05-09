import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  sendData() {
    const event = new CustomEvent<string>('event', {
      detail: 'Hello from mfe to host',
    });
    dispatchEvent(event);
  }
}
