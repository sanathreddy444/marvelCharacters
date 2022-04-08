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
  API_URL = this.service.API_URL
  KEY = this.service.KEY
  characters: any = [];
  offset: number = 20

  constructor(private service: SharedServiceService,
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.getAllCharacter(20, 0).subscribe(res => {
      this.characters = res.data.results
    })
  }
  getAllCharacter(limit, offset): Observable<any> {
    let url = this.API_URL + 'characters' + this.KEY + '&limit=' + limit + '&offset=' + offset
    return this.service.getApiCall(url)
  }

  loadData(event) {
    this.offset = this.offset + 20
    setTimeout(() => {
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
  openCharacterPage(id) {
    this.service.setCharacterId(id)
    this.router.navigate(['/characters-description'])
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
}
