import { Injectable } from '@angular/core';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public comicDescription: any;
  public characterId: any;
  // public messages: Message[] = [
  //   {
  //     fromName: 'Matt Chorsey',
  //     subject: 'New event: Trip to Vegas',
  //     date: '9:32 AM',
  //     id: 0,
  //     read: false
  //   }
  // ];

  constructor(public location: Location) { }

  // public getMessages(): Message[] {
  //   return this.messages;
  // }

  // public getMessageById(id: number): Message {
  //   return this.messages[id];
  // }
  public setComicDescription(data) {
    this.comicDescription = data
  }
  public getComicDescription() {
    return this.comicDescription
  }
  public backToPage() {
    console.log("iiii")
    this.location.back();
  }
  public setCharacterId(id) {
    this.characterId = id
  }
  public getCharacterId() {
    return this.characterId
  }

}
