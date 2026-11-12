import { useId } from 'react'

function FormSection({ title, onSubmit, onCancel, children }) {
  const titleId = useId()

  return (
    <section className="form-section" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>

      <form onSubmit={onSubmit}>
        {children}

        <div className="form-buttons">
          <button className="transparent-button" type="submit">
            Save
          </button>
          <button
            className="transparent-button"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}

export default FormSection
