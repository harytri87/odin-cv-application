import FormSection from '../FormSection'
import FormField from '../FormField'

function FormExperience({ experience, onSubmit, onCancel }) {
  const isEditing = experience !== null

  return (
    <FormSection
      title={isEditing ? 'Edit Experience' : 'Add Experience'}
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      <FormField
        label="Company"
        name="company"
        defaultValue={experience?.company}
        required
      />
      <FormField
        label="Job Title"
        name="jobTitle"
        defaultValue={experience?.jobTitle}
        required
      />
      <FormField
        label="Start Date"
        name="startDate"
        type="date"
        defaultValue={experience?.startDate}
        required
      />
      <FormField
        label="End Date (leave empty if ongoing)"
        name="endDate"
        type="date"
        defaultValue={experience?.endDate}
      />
      <FormField
        label="Location"
        name="location"
        defaultValue={experience?.location}
      />
      <FormField
        label="Description"
        name="jobDescription"
        multiline
        defaultValue={experience?.jobDescription}
      />
    </FormSection>
  )
}

export default FormExperience
