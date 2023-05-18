import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  Tabs: any;

  constructor() {
    fetch('./assets/json/tabs.json')
      .then((res) => res.json())
      .then((json) => {
        this.Tabs = json;
      });
  }

}