import React, { Component } from 'react';
import { provideState, injectState, softUpdate, hardUpdate } from 'freactal';
import '../assets/stylesheets/application.scss';

class App extends Component {
  constructor() {
    super()

    this.handleUsername = this.handleUsername.bind(this)
  }
  handleUsername( event ) {
    this.props.effects.handleUsername( event.target.value );
  }
  render () {
    let input;
    const { state, effects } = this.props;

    return (
      <div className='container center-text'>
      <input
        onChange={ this.handleUsername } />
      <p className='app-text'>{ state.loading ? 'LOADING LOADING' : state.user.name ? state.user.name : 'Fetch a user' }</p>
      <button onClick={ effects.fetchUser }>Fetch User</button>
      </div>
    )
  }
}

const wrapComponentWithState = provideState( {
  initialState: () => (
    {
      loading: false,
      user: {},
      username: ''
    }
  ),
  effects: {
    toggleLoading: () => state => Object.assign( {}, state, { loading: !state.loading } ),
    handleUsername: softUpdate( ( state, username ) => Object.assign( {}, state, { username } ) ),
    fetchUser: effects => state => {
      debugger;
      effects.toggleLoading()
        .then( (state) => {
          debugger;
          (state => {
          debugger;
          getUser( state.username )
        })()})
        .then( data => effects.toggleLoading().then( () => data) )
        .then( user => state => Object.assign( {}, state, { user } ) )
    // addOne: softUpdate( ( state ) => Object.assign( {}, state, { counter: state.counter + 1 } ) ),
    // removeOne: softUpdate( ( state ) => Object.assign( {}, state, { counter: state.counter - 1 } ) )
    }
  }
} );

const getUser = ( username ) => {
  const url = `https://api.github.com/users/${ username }`;

  return fetch( url ).then( data => (
    data.json()
      .then( json => json )
  ));
};

export default wrapComponentWithState( injectState( App ) );
