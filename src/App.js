import React from 'react';

import { Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { setCurrentUser } from "./redux/user/user.actions";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component{
  unsubscribefromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route 
            path="/signin" 
            render={() => 
              this.props.currentUser ? (
                <Redirect to="/" />
                ) : (
                <SignInAndSignUpPage/>
                ) 
              } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);