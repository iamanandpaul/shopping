import React from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { auth, signInWithGoogle } from "../../Firebase/Firebase.js";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signIn">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="signIn__button">
            <Button type="submit"> Sign In </Button>
            <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In with Google{" "}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
