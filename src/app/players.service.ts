import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players:Array<Player>;
  constructor() {
    this.players = [
      new Player("Shreyank Singhal", 0, true),
      new Player("Ujjwal", 0, false)
    ]
   }

   addto(pid:number){
    this.players.find(i=> i.pid===pid).pscore++;
    this.players.find(i=> i.pid===pid).pactive=true;
   }
   addPlayer(x){
     this.players.push(new Player(x.pname, x.pscore, x.pactive));
   }
   subto(pid:number){
     if(this.players.find(i=> i.pid===pid).pscore==0 && this.players.find(i=> i.pid===pid).pactive){
      this.players.find(i=> i.pid===pid).pactive = false;
     }else if(this.players.find(i=> i.pid===pid).pscore==0 && this.players.find(i=> i.pid===pid).pactive==false){
      this.players.find(i=> i.pid===pid).pactive = true;
     }else{
      this.players.find(i=> i.pid===pid).pscore--;
     }
   }
   playersSort:Array<Player>
   getPlayers(showAll):Array<Player>{
    //console.log(showAll);
     this.playersSort =  _.orderBy(this.players, ['pscore'], ['desc']);
     if(showAll === true){
       return this.playersSort;
     }else{
      return this.playersSort.filter(i => i.pactive == true); 
     }
   }
}

class Player{
  pname:string;
  pscore:number;
  pactive:boolean;
  static id:number = 0;
  pid:number;
  constructor(pname:string, pscore:number, pactive:boolean){
    this.pid = ++Player.id;
    this.pname = pname;
    this.pscore = pscore;
    this.pactive = pactive;
  }
}
