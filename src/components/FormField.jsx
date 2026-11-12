import { useId } from 'react'

// props sisanya (defaultValue, required, dll.) diteruskan ke input/textarea
function FormField({ label, name, type = 'text', multiline = false, ...props }) {
  const id = useId()

  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea id={id} name={name} rows={4} {...props} />
      ) : (
        <input type={type} id={id} name={name} {...props} />
      )}
    </div>
  )
}

export default FormField
