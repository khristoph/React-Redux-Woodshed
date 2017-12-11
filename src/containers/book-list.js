import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';



class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside of BookList
  return {
    books: state.books
  };
}

//Anything returned from this function will be props on the booklist container.
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is calles, result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a component to a container, it need to know
//about the dispatch method, selectBook. Make it available as a prop.
// READ DOCs ON CONNECT, and pieces of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(BookList);