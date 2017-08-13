import {
  Component, OnInit
} from '@angular/core';
import { Location }                 from '@angular/common';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HouseService} from "./house.service";

import 'rxjs/add/operator/switchMap';
import {House} from "./House";

@Component({
  selector: 'house',
  styleUrls: ['./house.component.css'],
  templateUrl: './house.component.html'
})
export class HouseComponent implements OnInit {

  house: House;

  editHouse: House;

  editView = false;

  loading: boolean = true;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private api: HouseService){}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.api.getHouse(params.get('id')))
      .subscribe(house => this.setHouse(house));
  }

  setHouse(house: House){

    this.house = house;

    this.loading = false;

  }

  updateHouse(){
    this.api.updateHouse(this.editHouse)
      .subscribe(house => this.houseUpdated(house));
  }

  houseUpdated(house: House){

    this.house = house;

    this.editView = false;

  }

  toggleEdit(){

    this.editView = !this.editView;

    if(this.editView) {

      this.editHouse = Object.assign({}, this.house);

    }

  }

  goBack(): void {
    this.location.back();
  }

}
