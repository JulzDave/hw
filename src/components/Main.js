import React, { Component } from 'react';

import Deal from './Deal';

class Main extends Component {

  imageStyle = {
    height: '300px'
  };


  render() {
    return (
      <div className="col-sm-12"> 

        <div className="row">
          <img style={this.imageStyle} src={this.props.mainImage.src} className="col-sm-12" title={this.props.mainImage.title} />
        </div>
 

        <div className="row">
          {this.props.deals.map((deal) => <Deal key={deal.id} buyDeal={this.buyDeal.bind(this)} deal={deal} />)}
        </div>


      </div>
    );
  }

  buyDeal(dealID) {
    //send the deal id to parent (App)
    console.log(dealID);
    this.props.buyDeal(dealID);
  }
 

}

export default Main;
