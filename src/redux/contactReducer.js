import {combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactAction from './contactAction';

const initialState = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    const AddContact = (state, action) => [...state, action.payload.contact];
    const RemoveContact = (state, action) => state.filter(contact => contact.id !== action.payload);
    
const items = createReducer(initialState,{
    [contactAction.addContact]: AddContact,
    [contactAction.removeContact]: RemoveContact,
})


const filter = createReducer('',{
    [contactAction.filterContact]: (state, action) => action.payload,

})

export default combineReducers({
    items,
    filter,
});

//=============================contactAction до рефакторинга кода на Redux Tookit==================================================
// import {combineReducers} from 'redux';
// import actionTypes from './contactActionType';
// import contactActionType from './contactActionType';

// const initialState = [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ];


// const items = (state = initialState, {type, payload}) => {
//     switch(type){
//         case actionTypes.ADD_CONTACT:
//         return[...state, payload.contact];

//         case actionTypes.DELETE_CONTACT:
//             return state.filter(contact => contact.id !== payload.id)
//         default:
//             return state;
//     }
// };


// const filter = (state = '', {type, payload}) => {
//     switch(type){
//         case actionTypes.FILTER_CONTACT:
//             return payload.filter;
//     default:
//         return state;
//     }
// };

// export default combineReducers({
//     items,
//     filter,
// });
