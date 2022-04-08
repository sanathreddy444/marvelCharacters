import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from "@angular/common";
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-characters-description',
  templateUrl: './characters-description.page.html',
  styleUrls: ['./characters-description.page.scss'],
})
export class CharactersDescriptionPage implements OnInit {
  API_URL = 'https://gateway.marvel.com/v1/public/'
  KEY = '?ts=16185334990410&apikey=f819f3621f81dde7edc382743d93d41c&hash=968c51ae154e70c54a0d0dd4fb5f405d';
characterData:any;
  constructor(
    private data: SharedServiceService,
    private activatedRoute: ActivatedRoute,
    private httpClient:HttpClient,
    private location:Location
  ) { }

  ngOnInit() {
    const id = this.data.getCharacterId()
    console.log(id)
    
    this.getAllCharacter(id).subscribe(res =>{
      console.log(res.data.results)
      this.characterData=res.data.results[0]

    })
  }
  getAllCharacter(id): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + 'characters/'+id + this.KEY )
  }
  backToPage(){
    console.log("iiii")
    this.location.back();
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
