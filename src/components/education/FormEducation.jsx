import FormSection from '../FormSection'
import FormField from '../FormField'

function FormEducation({ education, onSubmit, onCancel }) {
  const isEditing = education !== null

  return (
    <FormSection
      title={isEditing ? 'Edit Education' : 'Add Education'}
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      <FormField
        label="School/University"
        name="name"
        defaultValue={education?.name}
        required
      />
      <FormField
        label="Degree"
        name="degree"
        defaultValue={education?.degree}
        required
      />
      <FormField
        label="Start Date"
        name="startDate"
        type="date"
        defaultValue={education?.startDate}
        required
      />
      <FormField
        label="End Date (leave empty if ongoing)"
        name="endDate"
        type="date"
        defaultValue={education?.endDate}
      />
      <FormField
        label="Location"
        name="location"
        defaultValue={education?.location}
      />
      <FormField
        label="Description"
        name="eduDescription"
        multiline
        defaultValue={education?.eduDescription}
      />
    </FormSection>
  )
}

export default FormEducation
