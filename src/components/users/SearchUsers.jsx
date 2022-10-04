import React, { Component } from "react";

export class SearchUsers extends Component {
  state = {
    text: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.nameSearch(this.state.text);
    this.setState({text: ''})
  }
  onChange = (e) => this.setState({[e.target.name]: e.target.value})
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Search Users..."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default SearchUsers;
