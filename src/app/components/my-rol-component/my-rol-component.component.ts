import { Component, OnInit } from '@angular/core';
import { MyRolService } from "app/services/my-rol-service/my-rol-service.service";
import { MyRolModel } from "app/models/my-rol-model/my-rol-model";

@Component({
  selector: 'my-rol-component',
  templateUrl: './my-rol-component.component.html',
  styleUrls: ['./my-rol-component.component.css']
})
export class MyRolComponent implements OnInit {

  public rollen = new Array<MyRolModel>();

  constructor(private rolService: MyRolService) { 
  }

  public ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.rolService.getAll().subscribe(rollen => {
      rollen.forEach(r => {
        this.rollen.push(new MyRolModel(r.id, r.titel));
      });
    });
  }

}
