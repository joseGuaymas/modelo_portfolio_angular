import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-texto',
  templateUrl: './footer-texto.component.html',
  styleUrls: ['./footer-texto.component.css']
})
export class FooterTextoComponent implements OnInit {
  @Input() text: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
