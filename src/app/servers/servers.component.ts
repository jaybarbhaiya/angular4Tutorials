import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // [] changes the selector to an attribute
  // selector: '.app-servers',
  selector: 'app-servers', // recommended
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
