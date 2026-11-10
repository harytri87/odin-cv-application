import ContactItem from './ContactItem'

function Identity({ identity, onEdit, showEditButton }) {
  const { name, job, contacts } = identity

  return (
    <section className="identity" aria-labelledby="identity-title">
      <h1 id="identity-title">{name}</h1>

      <span className="identity-job">{job}</span>

      <address className="contacts">
        <ContactItem icon="call-icon">{contacts.phone}</ContactItem>
        <ContactItem icon="mail-icon">{contacts.email}</ContactItem>
        <ContactItem icon="location-icon">{contacts.address}</ContactItem>
      </address>

      {showEditButton && (
        <button type="button" className="section-button" onClick={onEdit}>
          Edit General Info
        </button>
      )}
    </section>
  )
}

export default Identity
