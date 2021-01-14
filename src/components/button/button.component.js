import './button.component.scss';

const Button = ({ children, isGoogleSignIn, ...buttonProps }) => {
  return <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`} {...buttonProps}>
    {children}
  </button>
}

export default Button;