import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  protected title = 'Lena Portianko`s personal website';

  constructor(
    protected titleService: Title
  ) {}
  
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
