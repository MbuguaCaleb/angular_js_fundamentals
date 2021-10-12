import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    //we can also be reactive and subsribe to changes from within
    //the compoent
    this.route.queryParams.subscribe(
      (queryParams: Params) =>
        (this.allowEdit = queryParams["allowEdit"] === "1" ? true : false)
    );

    this.route.fragment.subscribe();

    //+ is very important (Its like ParseInt)
    const id = +this.route.snapshot.params["id"];

    this.server = this.serversService.getServer(id);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
