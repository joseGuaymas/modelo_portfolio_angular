import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() text: string="";

  // @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  // onClick(){
  //   this.btnClick.emit();
  // }

}
