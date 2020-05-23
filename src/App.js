import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth } from "./firebase/firebase.utils";

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribefromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
    })
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;