import { useId } from 'react'

function ListSection({ title, addLabel, showEditButton, onAdd, children }) {
  const titleId = useId()

  return (
    <section className="list-section" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>

      {children}

      {showEditButton && (
        <button type="button" className="section-button" onClick={onAdd}>
          {addLabel}
        </button>
      )}
    </section>
  )
}

export default ListSection
