import { Component } from "react";
import { auth } from "../../firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.component.scss';
import { createUser } from '../../firebase/users.service';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return <div className="sign-up">
      <h2>I don't have an account</h2>
      <span className="title">Sign up with your email and password</span>

      <form className="form" onSubmit={this.handleSubmit}>
        <FormInput name="displayName" type="text" label="Display name" onChange={this.handleChange} value={displayName} required />
        <FormInput name="email" type="text" label="Email" onChange={this.handleChange} value={email} required />
        <FormInput name="password" type="password" label="Password" onChange={this.handleChange} value={password} required />
        <FormInput name="confirmPassword" type="password" label="Confirm password" onChange={this.handleChange} value={confirmPassword} required />
        <div className="buttons">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUser(user, { displayName });
      this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
}

export default SignUp;