import FormSection from '../FormSection'
import FormField from '../FormField'

function FormIdentity({ identity, onSubmit, onCancel }) {
  const { name, job, contacts } = identity

  return (
    <FormSection
      title="Edit General Info"
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      <FormField label="Full Name" name="name" defaultValue={name} />
      <FormField label="Job Title" name="job" defaultValue={job} />
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        defaultValue={contacts.phone}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        defaultValue={contacts.email}
      />
      <FormField
        label="Address"
        name="address"
        defaultValue={contacts.address}
      />
    </FormSection>
  )
}

export default FormIdentity
