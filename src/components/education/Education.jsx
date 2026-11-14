import ListSection from '../ListSection'
import ListItem from '../ListItem'

function Education({ educations, showEditButton, onAdd, onEdit, onDelete }) {
  return (
    <ListSection
      title="Education"
      addLabel="Add new education"
      showEditButton={showEditButton}
      onAdd={onAdd}
    >
      {educations.map((education) => (
        <ListItem
          key={education.id}
          title={education.name}
          subtitle={education.degree}
          description={education.eduDescription}
          startDate={education.startDate}
          endDate={education.endDate}
          location={education.location}
          showActions={showEditButton}
          onEdit={() => onEdit(education.id)}
          onDelete={() => onDelete(education.id)}
        />
      ))}
    </ListSection>
  )
}

export default Education
