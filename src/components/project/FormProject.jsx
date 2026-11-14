import FormSection from '../FormSection'
import FormField from '../FormField'

function FormProject({ project, onSubmit, onCancel }) {
  const isEditing = project !== null

  return (
    <FormSection
      title={isEditing ? 'Edit Project' : 'Add Project'}
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      <FormField
        label="Project"
        name="name"
        defaultValue={project?.name}
        required
      />
      <FormField
        label="Tech and Tools"
        name="tool"
        defaultValue={project?.tool}
        required
      />
      <FormField
        label="Start Date"
        name="startDate"
        type="date"
        defaultValue={project?.startDate}
        required
      />
      <FormField
        label="End Date (leave empty if ongoing)"
        name="endDate"
        type="date"
        defaultValue={project?.endDate}
      />
      <FormField
        label="Description"
        name="projectDescription"
        multiline
        defaultValue={project?.projectDescription}
      />
    </FormSection>
  )
}

export default FormProject
