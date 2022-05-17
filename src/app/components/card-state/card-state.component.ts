import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-state',
  templateUrl: './card-state.component.html',
  styleUrls: ['./card-state.component.css']
})
export class CardStateComponent implements OnInit {

  @Input()
  icon:String;
  @Input()
  iconColor:String;
  @Input() 
  title:String;
  @Input()
  value:String;
  @Input()
  variation:number;
  @Input()
  intervalation:String;

  constructor() { }

  ngOnInit(): void {
  }

}
