import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCreationComponent } from './components/game-creation/game-creation.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './stateManagement/reducers/game.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      game: gameReducer
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

