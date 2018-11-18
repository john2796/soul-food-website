import React, { Component } from 'react';
import Header from '../Header';
import { Button } from 'reactstrap';



class Layout extends Component {
  state = {}
  render() {
    return (
      <>
        <Header />
        <Button color="danger">Danger!</Button>
      </>
    );
  }
}

export default Layout;