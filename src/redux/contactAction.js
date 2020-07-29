import { createAction } from '@reduxjs/toolkit';
import actionType from './contactActionType';
import { uuid } from 'uuidv4';

const addContact = createAction('ADD_CONTACT', contact => ({payload: {
    contact:{
        id: uuid(),
        name: contact.name,
        number: contact.number,
    }
}}));

const removeContact = createAction('DELETE_CONTACT');

const filterContact = createAction('FILTER_CONTACT');


export default {addContact, removeContact, filterContact}

//=============================contactAction до рефакторинга кода на Redux Tookit==================================================
// import actionType from './contactActionType';

// const addContact = (newContact) => ({
//     type: actionType.ADD_CONTACT,
//     payload: {
//         contact:{
//             name: newContact.name,
//             number: newContact.number
//         }
        
//     }
// })


// const removeContact = id => ({
//     type: actionType.DELETE_CONTACT,
//     payload: { 
//         id,
//      }
// });


// const filterContact = filter => ({
//     type: actionType.FILTER_CONTACT,
//     payload: {
//         filter,
//     }
// })

// export default {addContact, removeContact, filterContact}