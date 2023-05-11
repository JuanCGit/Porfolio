import {Component, OnInit} from '@angular/core';
import {HeaderManagerService} from "../../services/header-manager.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private headerManager: HeaderManagerService) {
  }

  ngOnInit() {
    this.headerManager.setHeaderColor('#FFE730');
  }
}
