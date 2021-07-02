import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    friends: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { friends, searchField, onSearchChange, isPending } = this.props;
    const filteredFriends = friends.filter(friend => {
      return friend.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <Header count={this.state.count}/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList friends={filteredFriends} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
