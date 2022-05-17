import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'erro-alerts',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroAlertComponent implements OnInit {

  @Input()
  title:String;
  @Input()
  description:String;
  @Input()
  icon:String;
  constructor() { }
  @Input()
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
