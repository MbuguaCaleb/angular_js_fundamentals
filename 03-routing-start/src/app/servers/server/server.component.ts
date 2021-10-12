import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //+ is like parseInt in javascript
    //this one is gotten when the component is loading
    const id = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(id);

    //react to changes within the component
    //retrieved when the component has already loaded
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
    });
  }

  onEdit(id: number) {
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }
}
