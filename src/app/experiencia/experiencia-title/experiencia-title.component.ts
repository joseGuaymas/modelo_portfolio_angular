import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-title',
  templateUrl: './experiencia-title.component.html',
  styleUrls: ['./experiencia-title.component.css']
})
export class ExperienciaTitleComponent implements OnInit {
  @Input() text: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
