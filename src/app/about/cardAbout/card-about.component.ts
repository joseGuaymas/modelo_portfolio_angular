import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-about',
  templateUrl: './card-about.component.html',
  styleUrls: ['./card-about.component.css']
})
export class CardAboutComponent implements OnInit {
  @Input() nombre: string=""
  @Input() text: string=""
  constructor() { }

  ngOnInit(): void {
  }

}
