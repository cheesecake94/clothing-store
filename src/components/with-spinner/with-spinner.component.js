import './with-spinner.component.scss';

const WithSpinner = WrappedComponent => {
  const WithSpinnerComponent = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container" />
      </div>
    ) : (
        <WrappedComponent {...otherProps} />
      )
  };
  return WithSpinnerComponent;
}

export default WithSpinner;