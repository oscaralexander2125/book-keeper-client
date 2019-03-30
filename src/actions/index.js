import {API_BASE_URL} from '../config';
import {loadAuthToken} from '../local-storage';
const token = loadAuthToken();

export const FETCH_REQUEST =  'FETCH_REQUEST';
export const fetchRequest = () => ({
  type:FETCH_REQUEST
})

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (books) => ({
  type:FETCH_SUCCESS,
  books
})

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = error => ({
  type:FETCH_ERROR,
  error
})

export const ADD_BOOK = 'ADD_BOOK';
export const addBook = book => ({
  type:ADD_BOOK,
  book
})

export const GET_BOOKS = 'GET_BOOKS';
export const getBooks = books => ({
  type: GET_BOOKS,
  books
})

export const GET_PUBLIC_BOOKS = 'GET_PUBLIC_BOOKS';
export const getPublicBooks = books => ({
  type: GET_PUBLIC_BOOKS,
  books
})

export const DELETE_BOOK = 'DELETE_BOOK';
export const deleteBook = (book) => ({
  type: DELETE_BOOK,
  book
})

export const BOOK_ID = 'BOOK_ID';
export const bookId = id => ({
  type:BOOK_ID,
  id
})

export const UPDATE_BOOK = 'UPDATE_BOOK';
export const updateBook = (update, id) => ({
  type:UPDATE_BOOK,
  update,
  id
})

export const fetchBooks = (stage) => dispatch => {
  //console.log(localStorage.Bearer)
  dispatch(fetchRequest())
  return fetch (`${API_BASE_URL}/api/books?status=${stage}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.Bearer}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(books => {
    dispatch(fetchSuccess())
    dispatch(getBooks(books));
  })
  .catch(err => {
    dispatch(fetchError(err));
  });
}

export const fetchAddBook = (book) => dispatch => {
  dispatch(fetchRequest())
  return fetch(`${API_BASE_URL}/api/books`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(addedBook => {
    console.log('success')
    dispatch(fetchSuccess())
    dispatch(addBook(addedBook))
  })
  .catch(err => {
    console.log(err)
  })
}

export const fetchUpdateBook = (update, id) => dispatch => {
  dispatch(fetchRequest())
  return fetch(`${API_BASE_URL}/api/books/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(update)
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(update => {
    dispatch(fetchSuccess())
    console.log(update)
  })
  .catch(err => {
    console.log(err)
  });
}

export const fetchDeleteBook = id => dispatch => {
  dispatch(fetchRequest())
  return fetch(`${API_BASE_URL}/api/books/${id}`,{
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json();
  })
  .then(deletedBook => {
    console.log(deletedBook)
    dispatch(fetchSuccess())
    dispatch(deleteBook(deletedBook))
  })
}


