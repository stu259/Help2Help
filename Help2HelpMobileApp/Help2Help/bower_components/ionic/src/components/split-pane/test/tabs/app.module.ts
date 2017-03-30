import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, NavController, MenuController } from '../../../../../ionic-angular';


@Component({
  template: `
  <ion-header>
  <ion-navbar><ion-title>Navigation</ion-title></ion-navbar>
  </ion-header>
  <ion-content>

    <ion-slides style="background: black"
                pager="true"
                effect="flip">

      <ion-slide style="background: red; color: white;">
        <h1>Slide 1</h1>
      </ion-slide>

      <ion-slide style="background: white; color: blue;">
        <h1>Slide 2</h1>
      </ion-slide>

      <ion-slide style="background: blue; color: white;">
        <h1>Slide 3</h1>
      </ion-slide>

    </ion-slides>
  </ion-content>
  `
})
export class SidePage {
  constructor(public navCtrl: NavController) { }
  push() {
    this.navCtrl.push(SidePage);
  }
}


@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <button ion-button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title>Navigation</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>

    <button ion-button (click)="push()">Push</button>
    <div f></div>
    <div f></div>
    <div f></div>
    <div f></div>

  </ion-content>
  `
})
export class E2EPage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
  ) { }

  push() {
    this.navCtrl.push(E2EPage);
  }
}


@Component({
  templateUrl: 'main.html'
})
export class E2EApp {
  root = E2EPage;
  root2 = SidePage;
  side = 'right';
}

@NgModule({
  declarations: [
    E2EApp,
    E2EPage,
    SidePage,
  ],
  imports: [
    IonicModule.forRoot(E2EApp, {
      swipeBackEnabled: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EApp,
    E2EPage,
    SidePage,
  ]
})
export class AppModule {}

