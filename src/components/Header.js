import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron  col-sm-12">
        <h1 className="display-4">{this.props.title}</h1>
        <p className="lead">the best deals can be found here!</p>


      </div>
    );
  }
}

export default Header;
