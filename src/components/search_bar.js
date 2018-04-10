import React, { Component } from 'react';

// this is a React component called a 'functional component' because it literally is a function
// const SearchBar = () => {
//   return <input />;
// };
// there are other types of components called 'class based components' that we can make
// using CSS6 class such as below
// this can be read as define a new class called searchbar then has all the functionality of the react component class
// we use render with braced and curly braces to define a render function
// deciding when to use a class based vs a functional based component is tricky. start with functional based component and see if you need more
// complex functionality
// onChange is a specific React event, find out more in React DOCS
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

// we always manipulate our state with setState
// this onChange stuff and this.setState is the most important stuff for React
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
// the event object describes the context of the event that occurred
// can be called whatever we want
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }


export default SearchBar;
