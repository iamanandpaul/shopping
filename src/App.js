import React from "react";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Components/Shop/ShopPage";
import Header from "./Components/Header/Header";
import SigninandSignup from "./Components/SigninandSignup/SigninandSignup";
import { auth, createUserProfileDocument } from "./Firebase/Firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SigninandSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
