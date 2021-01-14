import { Component } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.component.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return <div className="sign-in">
      <h2>I already have an account</h2>
      <span className="title">Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput name="email" type="text" label="Email" onChange={this.handleChange} value={this.state.email} required />
        <FormInput name="password" type="password" label="Password" onChange={this.handleChange} value={this.state.password} required />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</Button>
        </div>
      </form>
    </div>
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
}

export default SignIn;