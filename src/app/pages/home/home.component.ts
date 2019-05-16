import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToWork(event) {
    var elmnt = document.getElementById("projects");
    elmnt.scrollIntoView({behavior: "smooth"});
  }

}
