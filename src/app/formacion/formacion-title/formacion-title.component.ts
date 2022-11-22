import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formacion-title',
  templateUrl: './formacion-title.component.html',
  styleUrls: ['./formacion-title.component.css']
})
export class FormacionTitleComponent implements OnInit {
  @Input() text: string=""
  constructor() { }

  ngOnInit(): void {
  }

}
