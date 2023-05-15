import {Component, OnInit} from '@angular/core';
import {HeaderManagerService} from "../../../services/header-manager.service";

@Component({
  selector: 'app-chesswrite',
  templateUrl: './chesswrite.html',
  styleUrls: ['./chesswrite.scss']
})
export class Chesswrite implements OnInit{
  constructor(private headerManager: HeaderManagerService) {
  }

  ngOnInit() {
    this.headerManager.setHeaderColor('#F02E65');
  }
}
