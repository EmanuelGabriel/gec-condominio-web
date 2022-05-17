import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-alerts',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoAlertsComponent implements OnInit {

  @Input()
  title:String;
  @Input()
  description:String;

  @Input()
  icon:String = "ni ni-check-bold";

  constructor() { }
  
  private _show:boolean = true;

  ngOnInit(): void {
  }

  onChangeDisplay(){
    if(this._show){
      this._show = false;
    }else{
      this._show = true;
    }
  }

  get show():boolean{
    return this._show;
  }
  set show(isShowing:boolean){
    this._show = isShowing;
  }
}
