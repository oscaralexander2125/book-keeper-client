import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_BOOK,
  GET_BOOKS,
  GET_PUBLIC_BOOKS,
  DELETE_BOOK,
  UPDATE_BOOK,
  BOOK_ID
} from '../actions/';

const initialState = {
  books:[],
  id:null,
  loading:true,
  error:null,
  updateBook:null
}

export default (state=initialState, action) => {
  if (action.type === GET_BOOKS) {
    return Object.assign({}, state, {
      loading: false,
      error:null,
      books: action.books
    })
  } else if (action.type === ADD_BOOK) {
    return Object.assign({}, state, {
      books:[...state.books, action.book]
    })
  } else if (action.type === UPDATE_BOOK) {
    return Object.assign({}, state, {
      updateBook: action.update
    })
  } else if (action.type === BOOK_ID) {
    return Object.assign({}, state, {
      id:action.id
    })
  } else if (action.type === DELETE_BOOK) {
      return Object.assign({}, state, {
        books: state.books.filter(book => book.id !== action.book.id)
      })
  } else if (action.type === FETCH_REQUEST) {
      return Object.assign({}, state, {
        loading: true,
        error:null
    })
  } else if (action.type === FETCH_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        error:null
      })
  } else if (action.type === FETCH_ERROR) {
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })
  }
  return state;
}