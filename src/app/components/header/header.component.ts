import {Component, OnInit} from '@angular/core';
import {HeaderManagerService} from "../../services/header-manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  backgroundColor = 'white';
  constructor(private headerManager: HeaderManagerService) {
  }

  ngOnInit() {
    this.headerManager.headerColor$.subscribe((color) => this.backgroundColor = color)
  }
}
