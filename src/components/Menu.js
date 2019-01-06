import React, { Component } from 'react';
import { Link } from "react-router-dom";

 

class Menu extends Component {

constructor(props)
{
    super(props);  
}


  render() {
    return (
    <div> 
  
      {this.props.listOfItems.map((item) => <div key={item}  className="menu-item"    ><Link to={item.toLowerCase()}>{item}</Link></div>)}  
  
    </div>
    );
  }


}

export default Menu;
