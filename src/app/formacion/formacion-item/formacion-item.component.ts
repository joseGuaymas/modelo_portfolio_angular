import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formacion-item',
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent implements OnInit {
  @Input() titulo: string=""
  @Input() instituto: string=""
  @Input() fecha: string=""
  
  constructor() { }

  ngOnInit(): void {
  }

}
