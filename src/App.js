import "./App.css";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import SearchUsers from "./components/users/SearchUsers";
import axios from 'axios'

class App extends React.Component {
  state = {
    users: [],
    loading: true
  }

  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data, loading: false})
  }

  nameSearch = async (text) => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data.items, loading: false})
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <SearchUsers nameSearch={this.nameSearch}  />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
