export function selectBook(book) {
  //select book is an action creator and need to return
  //an object with a type propert.
  // console.log('A book has been selected:', book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

