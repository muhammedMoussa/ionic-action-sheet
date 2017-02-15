import { Component } from '@angular/core';
import { ActionSheetController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'page.html'
})

export class HomePage {

  constructor(
    public actionCtrl: ActionSheetController,
    public platform: Platform
    ){
    
  }

  show() {

    let actionSheet = this.actionCtrl.create({
      cssClass: 'action-sheets-basic-page',
      title: 'Albums',
      buttons: [

        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete Clicked')
          }
        },
        
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share Clicked')
          }
        },

        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
        }, 
        
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
        },

        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,

        }
      ]
    });
    actionSheet.present();
  }
  
}
