import {
  Component, EventEmitter, Output
} from '@angular/core';
import {House} from "../house/House";
import {AddHouseService} from "./add-house.service";

@Component({
  selector: 'add-house',
  styleUrls: ['./add-house.component.css'],
  templateUrl: './add-house.component.html'
})
export class AddHouseComponent {

  newHouse: House = new House();

  @Output() closeMe = new EventEmitter<any>();

  constructor(private api: AddHouseService){}

  addHouseClicked(){

    console.log('click');

    console.log('newHouse', this.newHouse);

    if(this.newHouse.url){

      this.api.post(this.newHouse)
        .subscribe(res => this.closeMe.emit(res));

    }

  }

}
