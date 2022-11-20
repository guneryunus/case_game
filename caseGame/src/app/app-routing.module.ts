import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCreationComponent } from './components/game-creation/game-creation.component';
import { GameListComponent } from './components/game-list/game-list.component';

const routes: Routes = [

  {
    path:'game-creation',
    component:GameCreationComponent 
  },
  {
    path:'',
    component:GameListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}