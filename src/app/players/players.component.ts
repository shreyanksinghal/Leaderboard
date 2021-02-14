import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PlayersService } from '../players.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnChanges {
  @Input() showAll:boolean = false;
  @Input() isAdded:boolean = false;
  players:any[];
  constructor( private _p:PlayersService) {
    this.players = this._p.getPlayers(this.showAll);
   }
   incScore(pid:number){
    this._p.addto(pid);
    this.players = this._p.getPlayers(this.showAll);
   }
   decScore(pid:number){
    this._p.subto(pid);
    this.players = this._p.getPlayers(this.showAll);
   }
   setMyStyles(bool){
    if(bool === true){
      let styles = {
        'border': '1px solid green'
      };
      return styles;
    }else{
      let styles = {
        'border': '1px solid red'
      };
      return styles;
    }
   }
  ngOnInit(): void {
  }
  ngOnChanges(changes : SimpleChanges): void{
    if(changes.showAll){
      if(changes.showAll.previousValue != changes.showAll.currentValue){
        this.players =this._p.getPlayers(this.showAll);
      }
    }
    if(changes.isAdded){
      if(changes.isAdded.previousValue != changes.isAdded.currentValue){
        this.players =this._p.getPlayers(this.showAll);
      }
    }
    
  }

}
