import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Deal1 from './components/Deal1';

import Menu from './components/Menu';
import { Footer } from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "Home",
      deals: []
    };
  }



  componentDidMount() {
    fetch('http://localhost:3000/deals')
      .then(response => response.json())
      .then(data => this.setState({ deals: data }));
  }



  render() {
    let image = {
      title: "bryceTours",
      src: "https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzA2XFxcLzI2MTU1MTI0XFxcL2lTdG9jay0xNTU0MzkzMTUxLmpwZ1wiLFwid2lkdGhcIjo3NjcsXCJoZWlnaHRcIjo0MzEsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5oZXIuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9oZXJcXFwvbm8taW1hZ2UucG5nP3Y9NVwifSIsImhhc2giOiI0YTFiNWEzOGQyMGY0OTUzODVjYTdmYmM4NjVlMTRiNGUwMjZhNmQ1In0=/istock-1554393151.jpg"
    }

    let pageToDraw;
    if (this.state.page == "Home") {
      pageToDraw = <Main changePage={this.changePage.bind(this)} buyDeal={this.addBuyer.bind(this)} mainImage={image} className="row" deals={this.state.deals} />
      // console.log(this.state.deals)
    }
    else if (this.state.page == "About") {
      pageToDraw = <About ></About>
    }
    else {
      pageToDraw = <Contact ></Contact>
    }



    return (
      <Router>
        
        <div className="container">
          <Header title="Bryce Tours" className="row" />
          <Menu changePage={this.changePage.bind(this)} listOfItems={["About", "Home", "Contact"]}   ></Menu>
          <div className="row">
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />  
            <Route exact path="/sales" render={() => (<Redirect to="/home" />)} />  
            <Route path="/about" component={About} />
            <Route path="/deal1" render={() => ( <Deal1 changePage={this.changePage.bind(this)} buyDeal={this.addBuyer.bind(this)} mainImage={image} className="row" deals={this.state.deals} />)} />  
            <Route path="/contact" component={Contact} />
            <Route path="/home" render={() => ( <Main changePage={this.changePage.bind(this)} buyDeal={this.addBuyer.bind(this)} mainImage={image} className="row" deals={this.state.deals} />)} />  
            <Route component={NotFound}/>
            </Switch>
            </div>

          <Footer copy="all rights reseverd. 2018" className="row" />

        </div>
        
      </Router>

    );
  }


  addBuyer(dealID) {
    //copy array and change
    let newDeals = this.state.deals.slice();
    newDeals[dealID - 1].numOfBuyers++;

    this.setState({
      deals: newDeals
    })
  }


  changePage(page) {
    this.setState({
      page: page
    });
  }


}

export default App;
