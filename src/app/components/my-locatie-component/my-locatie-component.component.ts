import { Component, OnInit } from '@angular/core';
import { MyLocatieModel } from "app/models/my-locatie-model/my-locatie-model";
import { MyLocatieService } from "app/services/my-locatie-service/my-locatie-service.service";

@Component({
  selector: 'my-locatie-component',
  templateUrl: './my-locatie-component.component.html',
  styleUrls: ['./my-locatie-component.component.css']
})
export class MyLocatieComponent implements OnInit {

  public locaties = new Array<MyLocatieModel>();

  constructor(private locatieService: MyLocatieService) { 
  }

  public ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.locatieService.getAll().subscribe(locaties => {
      locaties.forEach(l => {
        this.locaties.push(new MyLocatieModel(l.id, l.plaatsNaam, l.latitude, l.longitude));
      });
    });
  }

}
