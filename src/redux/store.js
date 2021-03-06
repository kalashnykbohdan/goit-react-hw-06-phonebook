import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactReducer'

const store = configureStore({
    reducer: {
        contacts: contactReducer,
    }
  });
export default store;

//==============================store до рефакторинга кода на Redux Tookit==================================================

// import { createStore, combineReducers } from 'redux';
// import contactReducer from './contactReducer'

// const rootReducer = combineReducers({
//     contacts: contactReducer,
// });


// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)

// export default store;