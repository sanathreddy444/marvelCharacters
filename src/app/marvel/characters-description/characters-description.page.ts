import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from "@angular/common";
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-characters-description',
  templateUrl: './characters-description.page.html',
  styleUrls: ['./characters-description.page.scss'],
})
export class CharactersDescriptionPage implements OnInit {

  API_URL = this.service.API_URL
  KEY = this.service.KEY

characterData:any;
  constructor(
    private service: SharedServiceService,
    private location:Location
  ) { }

  ngOnInit() {
    const id = this.service.getCharacterId()    
    this.getAllCharacter(id).subscribe(res =>{
      this.characterData=res.data.results[0]

    })
  }
  getAllCharacter(id): Observable<any> {
    let url = this.API_URL + 'characters/'+id + this.KEY 
    return this.service.getApiCall(url)
  }
  backToPage(){
    this.location.back();
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
