import { tassign } from 'tassign';
import { MODIFICA_PERFIL, } from './action';

export interface IAppState {

    data: {
        nombre: string,
        apellidos: string,
        email: string,
        username: string,
        ciudad: string,
        id: number,
        password: string
    }
}

export const INITIAL_STATE: IAppState = {

    data: {
        nombre: '',
        apellidos: '',
        email: '',
        username: '',
        ciudad: '',
        id: 0,
        password: ''
    }
}

export function rootReducer(state: IAppState, action): IAppState {

    console.log(action);
    switch (action.type) {
        case MODIFICA_PERFIL:
            return tassign(state, { data: action.data });
    }
    return state;
}