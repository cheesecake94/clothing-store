import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './login.component.scss';

const LoginPage = () => {
  return (
    <div className="login-page">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default LoginPage;