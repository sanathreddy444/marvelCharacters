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


  constructor( private httpClient: HttpClient,private router:Router, private service:SharedServiceService) { }

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
      let data= {
        title:this.characters[2].title,
        thumbnail:this.characters[2].thumbnail['path'],
        description:this.characters[2].description,
        format:this.characters[2].format
      }
      console.log(data)

    })

  }
  getAllCharacter(limit, offset): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + 'characters/'+ "1009144"  +"/comics"+ this.KEY + '&limit=' + limit + '&offset=' + offset)
  }
  openComicDescription(i){
    console.log("here" , i)
    let data= {
      title:this.characters[i].title,
      thumbnail:this.characters[i].thumbnail['path'],
      description:this.characters[i].description,
      format:this.characters[i].format
    }
    console.log(data)
    this.service.setComicDescription(data)
    this.router.navigate(['/comics-description'])

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


}
