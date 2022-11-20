import { createReducer, on } from "@ngrx/store";
import { Game } from "src/app/models/game";
import { addGame, removeGame } from "../actions/game.action";

export interface IState {
    data: Game[];
}

export const initialGameState: IState = {
    data: Array<Game>()
}

export const gameReducer = createReducer(initialGameState,
    on(addGame, (state, game) => {
        const newState: IState = {
            data: [...state.data, game]
        }
        return newState;
    }),
    on(removeGame, (state, game) => {
        const deleteGame: Game | any = state.data.find(g => g.id == game.id);
        const deleteGameIndexNo = state.data.indexOf(deleteGame);
        const newState: IState = {
            data: [...state.data]
        };
        newState.data.splice(deleteGameIndexNo, 1);
        return newState;
    })
);