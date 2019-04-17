import { Component, OnInit } from '@angular/core';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.sass']
})
export class SobreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  botaoClick() {
    window.open('https://www.google.com', '_blank');
  }
}
