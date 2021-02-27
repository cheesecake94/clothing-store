import './form-input.component.scss';

const FormInput = ({ handleChange, label, ...inputProps }) => {
  return <div className="group">
    {label ? <label className="form-input-label">{label}</label> : null}
    <input className="form-input" onChange={handleChange} {...inputProps} />
  </div>
}

export default FormInput;