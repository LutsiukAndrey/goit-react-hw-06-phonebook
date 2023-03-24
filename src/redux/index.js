import { createStore } from 'redux';
const FILTER = 'FILTER';
const DELETE = 'DELETE';
const ADD = 'ADD';
export const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return (state = {
        contacts: [...state.contacts, action.payload],
        filter: '',
      });
    }
    case DELETE: {
      return (state = {
        contacts: [...state.contacts.filter(el => el.id !== action.payload)],
        filter: '',
      });
    }
    case FILTER: {
      return {
        ...state,

        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

// store
export const store = createStore(
  contactReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//actionsCeator
export const addContact = contactItem => {
  return { type: ADD, payload: contactItem };
};

export const deleteContact = id => {
  return { type: DELETE, payload: id };
};
export const filterContact = value => {
  return { type: FILTER, payload: value.toLowerCase() };
};
