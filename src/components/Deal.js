import React, { Component } from 'react';



class Deal extends Component {

  timerInerval = null;
 

  constructor(props) {
    super(props);
    this.state = { timer: this.props.deal.endsIn };
    this.self=this;

  }

  componentDidMount() {
    this.startCountDown();
  }

  render() {
    return (
      <div className="col-sm-3 deal">

        <h1> {this.props.deal.to}</h1>
        <h5>Ends is: {this.state.timer}</h5>
        <img src={this.props.deal.image} />
        <button  onClick={this.stopTimerAndBuyDeal.bind(this,this.props.deal.id )} className="btn btn-primary">Buy deal</button>
        <h5>Number of buyers: {this.props.deal.numOfBuyers}</h5>
      </div>
    );
  }

  componentWillUnmount() {
   
    this.stopTimer();
  }
  
  shouldComponentUpdate(nextProps, nextState)
  {
    
   if(nextProps.deal.numOfBuyers>10)
   {
     return false;
   }
   else
   {
     return true;
   }

  }


  startCountDown() {
    this.timerInerval = setInterval(() => {
      if (this.state.timer > 0) {
        let updatedTimer = this.state.timer;
        updatedTimer = updatedTimer - 1;
        this.setState({ timer: updatedTimer });
      }
    }, 1000)
  }

  stopTimer()
  {
    clearInterval(this.timerInerval);
  }

  
  stopTimerAndBuyDeal(dealID) {
    //stop the Timer
   clearInterval(this.timerInerval);
   this.props.buyDeal(dealID);
  }

}

export default Deal;
