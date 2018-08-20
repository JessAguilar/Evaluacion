import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { GraficaPage } from '../grafica/grafica';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = GraficaPage;

  constructor() {

  }
}
