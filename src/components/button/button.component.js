import './button.component.scss';

const Button = ({ children, ...buttonProps }) => {
  return <button className="button" {...buttonProps}>
    {children}
  </button>
}

export default Button;