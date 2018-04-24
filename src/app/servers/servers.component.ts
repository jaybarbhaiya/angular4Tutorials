import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // [] changes the selector to an attribute
  // selector: '.app-servers',
  selector: 'app-servers', // recommended
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
