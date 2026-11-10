import { useId } from 'react'

function FormField({ label, name, type = 'text', defaultValue }) {
  const id = useId()

  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} defaultValue={defaultValue} />
    </div>
  )
}

export default FormField
