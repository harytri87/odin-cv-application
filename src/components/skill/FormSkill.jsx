import FormSection from '../FormSection'
import FormField from '../FormField'

function FormSkill({ skill, onSubmit, onCancel }) {
  return (
    <FormSection title="Edit Skill" onSubmit={onSubmit} onCancel={onCancel}>
      <FormField
        label="Skill list"
        name="skill"
        defaultValue={skill}
        placeholder="Skill one, skill two, skill three, ..."
      />
    </FormSection>
  )
}

export default FormSkill
