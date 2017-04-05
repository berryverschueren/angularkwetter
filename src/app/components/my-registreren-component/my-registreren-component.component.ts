import { Component, OnInit } from '@angular/core';
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";
import { MyKwetteraarModel } from "app/models/my-kwetteraar-model/my-kwetteraar-model";
import { Router } from "@angular/router";

@Component({
  selector: 'my-registreren-component',
  templateUrl: './my-registreren-component.component.html',
  styleUrls: ['./my-registreren-component.component.css']
})
export class MyRegistrerenComponent implements OnInit {

  public name: string;
  public foto: string;
  public bio: string;
  public website: string;
  public rol: string;
  public plaatsnaam: string;
  public password: string;

  constructor(private router: Router, private kwetteraarService: MyKwetteraarService) { }

  ngOnInit() {
  }

  public formProcess() {
    this.kwetteraarService.create(this.name, this.foto, this.bio, this.website, this.rol, this.plaatsnaam, this.password).subscribe(k => {
      if (k != null && k.id >= 0) {
        this.router.navigateByUrl('/inloggen');
      }
    });
  }

}
