import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.page.html',
  styleUrls: ['./comics-list.page.scss'],
})
export class ComicsListPage implements OnInit {
  searchValue: string;
  constructor(private router: Router, 
    private service: SharedServiceService) { }

  API_URL = this.service.API_URL
  KEY = this.service.KEY
  characters: any = [];
  offset: number = 20
  ngOnInit() {
    this.getAllCharacter(20, 0).subscribe(res => {
      this.characters = res.data.results
    })

  }
  getAllCharacter(limit, offset): Observable<any> {
    let url = this.API_URL + 'characters/' + "1009144" + "/comics" + this.KEY + '&limit=' + limit + '&offset=' + offset
    return this.service.getApiCall(url)
  }
  openComicDescription(i) {
    let data = {
      title: this.characters[i].title,
      thumbnail: this.characters[i].thumbnail['path'],
      description: this.characters[i].description,
      format: this.characters[i].format
    }
    this.service.setComicDescription(data)
    this.router.navigate(['/comics-description'])

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

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 2000);
  }


}
