import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SharedServiceService } from 'src/app/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  searchValue: string;


  constructor(private service: SharedServiceService, private httpClient: HttpClient, private router : Router) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  API_URL = 'https://gateway.marvel.com/v1/public/'
  KEY = '?ts=16185334990410&apikey=f819f3621f81dde7edc382743d93d41c&hash=968c51ae154e70c54a0d0dd4fb5f405d';
  characters: any = [];
  offset: number = 20
  ngOnInit() {



    this.getAllCharacter(20, 0).subscribe(res => {
      this.characters = res.data.results
      console.log(this.characters )

    })

  }
  getAllCharacter(limit, offset): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + 'characters' + this.KEY + '&limit=' + limit + '&offset=' + offset)
  }

  loadData(event) {
    this.offset = this.offset + 20
    setTimeout(() => {
      console.log('Done');
      this.getAllCharacter(20, this.offset).subscribe(res => {
        this.characters = this.characters.concat(res.data.results)

      })
      event.target.complete();

      if (this.characters.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
  openCharacterPage(id){
    console.log(id)
    this.service.setCharacterId(id)
    this.router.navigate(['/characters-description'])
  }

}
