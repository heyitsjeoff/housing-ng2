import {
  Component,
  OnInit
} from '@angular/core';

import {HomeService} from './home.service'

import {House} from '../house/House';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  houseArray: House[] = [];

  createUpdateHouse: House = new House();

  addingHouse = false;

  constructor(private api: HomeService) {
  }

  public ngOnInit() {

    this.api.get()
      .subscribe((res) => this.houseArray = res);

  }

  clearHouse(): void {

    this.createUpdateHouse = new House();

  }

  houseUpdated(updatedHouse: House) {

    let id = updatedHouse._id;

    let foundId: string, foundHouse: House;

    for (let i = 0; i < this.houseArray.length; i++) {

      foundHouse = this.houseArray[i];

      foundId = foundHouse._id;

      if (id === foundId) {

        this.houseArray[i] = updatedHouse;

        this.addingHouse = false;

        this.clearHouse();

        return;

      }

    }

  }

  toggleForm(){

    this.addingHouse = !this.addingHouse;

  }

  closeMeTriggered(event) {
    if(event){
      let id = event.id;
      this.addingHouse = false;
    }
  }

  houseAdded(id: string): void {

    this.createUpdateHouse._id = id;

    this.houseArray.push(this.createUpdateHouse);

    this.clearHouse();

  }

}
