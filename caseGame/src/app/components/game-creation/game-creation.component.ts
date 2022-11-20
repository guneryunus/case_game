import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { addGame } from 'src/app/stateManagement/actions/game.action';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.scss']
})
  export class GameCreationComponent implements OnInit {

    constructor(private store: Store<Game>) { }

    game: Observable<string>;
    newGame:Game= new Game();

    ngOnInit(): void {
      this.newGame.initNull();
      this.game = this.store.select("game");
    }
   
    createGame() {
      const g: Game = new Game();
      g.id=2;
      g.game = this.newGame.game;
      g.bundle = this.newGame.bundle;
      g.owner=this.newGame.owner;
      g.img=this.newGame.img
      this.store.dispatch(addGame(g));
      this.newGame.initNull();
    }
  }