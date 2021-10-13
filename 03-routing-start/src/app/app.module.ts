/*Its good practice to add angular specific modules at the top*/
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

/**My Components and servicees */
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard-service";

//an array of routes which i have called appRoutes
//I then must register the appRoutes at the imports so that they are
//recoginized within my application

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ServersService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
