import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'warning-alerts',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningAlertsComponent implements OnInit {

  @Input()
  title:String;
  @Input()
  description:String;
  @Input()
  icon:String = "ni ni-bell-55";
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
