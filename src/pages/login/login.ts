import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { googleAuthProvider, auth, facebookAuthProvider } from '../../app/firebase';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {}

  public handleAuthentication(provider) {
    switch (provider) {
      case 'google': {
        auth.signInWithPopup(googleAuthProvider);
        break;
      }
      case 'facebook': {
        auth.signInWithPopup(facebookAuthProvider).catch((error: any) => {
          const alert = this.alertCtrl.create({
            title: 'Lo sentimos',
            subTitle: error.message,
            buttons: ['Ok']
          });
          alert.present();
        });
        break;
      }
      case 'twitter': {
        const alert = this.alertCtrl.create({
          title: 'Lo sentimos',
          subTitle: 'Próximamente tendremos accesso a través de Twitter',
          buttons: ['Ok']
        });
        alert.present();
        break;
      }
      default:
        break;
    }
  }

}
