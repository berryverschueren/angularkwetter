import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyKwetteraarComponent } from "app/components/my-kwetteraar-component/my-kwetteraar-component.component";
import { MyKweetComponent } from "app/components/my-kweet-component/my-kweet-component.component";
import { MyHashtagComponent } from "app/components/my-hashtag-component/my-hashtag-component.component";
import { MyLocatieComponent } from "app/components/my-locatie-component/my-locatie-component.component";
import { MyRolComponent } from "app/components/my-rol-component/my-rol-component.component";
import { MyRegistrerenComponent } from "app/components/my-registreren-component/my-registreren-component.component";
import { MyInloggenComponent } from "app/components/my-inloggen-component/my-inloggen-component.component";
import { MyProfileComponent } from "app/components/my-profile-component/my-profile-component.component";
import { AuthGuard } from "app/guards/authentication.guard";
import { MyUitloggenComponent } from "app/components/my-uitloggen-component/my-uitloggen-component.component";
import { OtherProfileComponent } from "app/components/other-profile-component/other-profile-component.component";

const routes: Routes = [
  { path: 'kwetteraar',  component: MyKwetteraarComponent },
  { path: 'kweet',  component: MyKweetComponent },
  { path: 'hashtag',  component: MyHashtagComponent },
  { path: 'locatie',  component: MyLocatieComponent },
  { path: 'rol',  component: MyRolComponent },
  { path: 'otherprofile',  component: OtherProfileComponent },
  { path: 'profile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'inloggen',  component: MyInloggenComponent },
  { path: 'registreren',  component: MyRegistrerenComponent },
  { path: 'uitloggen', component: MyUitloggenComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}