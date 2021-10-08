import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ServersService } from "./servers.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  //i inject my router i inject my services
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //unlike the router link the naviage method does not know which route
    //you are currently on
    //By default naviage directs to the root domain not unless i add the relative To
    //We can get the currenly active route by adding the Activated Route Property
    //It injects the currenly activted route which the component has loaded
    //this.router.navigate(["servers"], { relativeTo: this.route });
  }
}
