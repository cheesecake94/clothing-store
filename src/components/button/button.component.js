import './button.component.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...buttonProps }) => {
  return <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} button`} {...buttonProps}>
    {children}
  </button>
}

export default Button;