import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-comics-description',
  templateUrl: './comics-description.page.html',
  styleUrls: ['./comics-description.page.scss'],
})
export class ComicsDescriptionPage implements OnInit {
  constructor(private service : SharedServiceService,
    
    private location: Location) { }
  characterData:any;
  ngOnInit() {
    this.characterData = this.service.getComicDescription()
  }
  backToPage(){
    this.service.backToPage()
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }


}
