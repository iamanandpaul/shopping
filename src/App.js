import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Components/Shop/ShopPage";
import Header from "./Components/Header/Header";
import SigninandSignup from "./Components/SigninandSignup/SigninandSignup";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninandSignup} />
      </Switch>
    </div>
  );
}

export default App;
