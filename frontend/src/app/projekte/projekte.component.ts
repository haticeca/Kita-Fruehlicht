import { Component, OnInit } from '@angular/core';
import {Projekt} from "../shared/Projekt";
import {ProjektService} from "../shared/projekt.service";
import {Member} from "../shared/Member";

@Component({
  selector: 'app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.css']
})
export class ProjekteComponent implements OnInit {
  projekte: Projekt[];

  constructor(private pS: ProjektService) { }

  ngOnInit(): void {
    this.readAll();
  }
  readAll(): void {
    this.pS.getAll().subscribe(
      (response: Projekt[]) => {
        console.log(response);
        return this.projekte = response;  },
      error => console.log(error)
    );
  }
}
