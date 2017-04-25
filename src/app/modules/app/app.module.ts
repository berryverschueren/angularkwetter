import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyAppComponent } from "app/components/my-app-component/my-app-component.component";
import { MyKwetteraarComponent } from "app/components/my-kwetteraar-component/my-kwetteraar-component.component";
import { MyKweetComponent } from "app/components/my-kweet-component/my-kweet-component.component";
import { MyHashtagComponent } from "app/components/my-hashtag-component/my-hashtag-component.component";
import { MyLocatieComponent } from "app/components/my-locatie-component/my-locatie-component.component";
import { MyRolComponent } from "app/components/my-rol-component/my-rol-component.component";
import { AppRoutingModule } from "app/modules/app-routing/app-routing.module";
import { MyKwetteraarService } from "app/services/my-kwetteraar-service/my-kwetteraar-service.service";
import { MyKweetService } from "app/services/my-kweet-service/my-kweet-service.service";
import { MyHashtagService } from "app/services/my-hashtag-service/my-hashtag-service.service";
import { MyLocatieService } from "app/services/my-locatie-service/my-locatie-service.service";
import { MyRolService } from "app/services/my-rol-service/my-rol-service.service";
import { MyInloggenComponent } from "app/components/my-inloggen-component/my-inloggen-component.component";
import { MyRegistrerenComponent } from "app/components/my-registreren-component/my-registreren-component.component";
import { MyProfileComponent } from "app/components/my-profile-component/my-profile-component.component";
import { AuthGuard } from "app/guards/authentication.guard";
import { MyUitloggenComponent } from "app/components/my-uitloggen-component/my-uitloggen-component.component";
import { OtherProfileComponent } from "app/components/other-profile-component/other-profile-component.component";
import { UpdateProfileComponent } from "app/components/update-profile-component/update-profile-component.component";
import { MyStartComponent } from "app/components/my-start-component/my-start-component.component";
import { AdminGuard } from "app/guards/admin.guard";
import { AdminComponent } from "app/components/admin-component/admin-component.component";
import { WebsocketTest } from "app/components/websocket-test-component/websocket-test.component";

@NgModule({
  declarations: [
    MyAppComponent,
    MyKwetteraarComponent,
    MyKweetComponent,
    MyHashtagComponent,
    MyLocatieComponent,
    MyRolComponent,
    MyInloggenComponent,
    MyRegistrerenComponent,
    MyProfileComponent,
    OtherProfileComponent,
    UpdateProfileComponent,
    MyUitloggenComponent,
    MyStartComponent,
    AdminComponent,
    WebsocketTest
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    MyKwetteraarService,
    MyKweetService,
    MyHashtagService,
    MyLocatieService,
    MyRolService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [MyAppComponent]
})
export class AppModule { }

