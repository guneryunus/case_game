import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/models/game';
import { removeGame } from 'src/app/stateManagement/actions/game.action';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private store: Store<Game>) { }
  games: any;

  ngOnInit(): void {
    this.store.select("game").subscribe(game => {
      this.games  = game;
    });
  }

  removeGame(game: Game) {
    this.store.dispatch(removeGame(game));
  }
}
