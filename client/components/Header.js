import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/currentUser';

class Header extends Component {
  render() {
    return <div>Header</div>;
  }
}

export default graphql(CurrentUser)(Header);
