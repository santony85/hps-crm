import { Component } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { GlobalService } from '../global.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { LoadingController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rdv:any=[];
  segmentModel = "rdv";
  maj="";

  ntous=0;
  nrdv=0;
  naconf=0;
  ncontact=0;
  nretard=0;

  affBadge=0;





  constructor(
    private router: Router,
    private globalservice: GlobalService,
    public menuCtrl: MenuController,
    private callNumber: CallNumber,
    public loadingController: LoadingController,
    private storage: Storage,
    private alertCtrl: AlertController) {



  }

  ionViewWillEnter() {
    this.menuCtrl.swipeGesture(false);
    this.menuCtrl.enable(true);
    this.globalservice.loadUser();
  }



goform(data){
  if(data!="2"){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        item: JSON.stringify(null),
        user: JSON.stringify(this.globalservice.getUser()),
        from:data
      },
    };
    this.router.navigate(["/formrdv"], navigationExtras);
  }

  else {
    //this.affRdv(null);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        item: JSON.stringify(null),
        user: JSON.stringify(this.globalservice.getUser()),
        from:data
      },
    };
    this.router.navigate(["/formrdv"], navigationExtras);
  }
}

}
