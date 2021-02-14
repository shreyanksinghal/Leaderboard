import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor( public _p:PlayersService) { }
  @Output() afterAdd = new EventEmitter<boolean>();
  adding:boolean = false;
  hero={name:"Shreyank"}
  x:any={};
  add_player(){
    if(!this.x.pname && !this.x.pscore){
      alert("All fields are required");
      return;
    }
    if(!this.x.pname){
      alert("Please fill a Name");
      return;
    }
    if(!this.x.pscore){
      alert("Please mention the score of player");
      return;
    }
    this.x.pactive = true;
      this._p.addPlayer(this.x);
      document.getElementById("closeButton").click();
      this.x={};
      this.adding = !this.adding;
      this.afterAdd.emit(this.adding);
  }
  ngOnInit(): void {
  }

}
