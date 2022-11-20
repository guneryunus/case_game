import { createAction, props } from "@ngrx/store";
import { Game } from "src/app/models/game";

export const ADD_GAME='[ADD GAME] Game';
export const REMOVE_GAME='[REMOVE GAME] Game';
export const addGame = createAction(ADD_GAME, props<Game>());
export const removeGame = createAction(REMOVE_GAME, props<Game>());