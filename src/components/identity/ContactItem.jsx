function ContactItem({ icon, children }) {
  return (
    <div>
      <svg aria-hidden="true">
        <use href={`/icons.svg#${icon}`} />
      </svg>
      <span>{children}</span>
    </div>
  )
}

export default ContactItem
