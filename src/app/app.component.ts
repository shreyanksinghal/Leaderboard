import { Component } from '@angular/core';
import { PlayersService } from './players.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showAll:boolean = false;
  isAdded:boolean = false;
  constructor(private _ps:PlayersService){
  }
  onAdd(Added:boolean){
    this.isAdded = Added;
  }
  title = 'leaderboard';
  onCheck(e) {
    if(e.target.checked){   
      this.showAll = true;
    }
    else{
      this.showAll = false;
    }
  }
}
