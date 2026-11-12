import ListSection from '../ListSection'
import ListItem from '../ListItem'

function Experience({ experiences, showEditButton, onAdd, onEdit, onDelete }) {
  return (
    <ListSection
      title="Experience"
      addLabel="Add new experience"
      showEditButton={showEditButton}
      onAdd={onAdd}
    >
      {experiences.map((experience) => (
        <ListItem
          key={experience.id}
          title={experience.company}
          subtitle={experience.jobTitle}
          description={experience.jobDescription}
          startDate={experience.startDate}
          endDate={experience.endDate}
          location={experience.location}
          showActions={showEditButton}
          onEdit={() => onEdit(experience.id)}
          onDelete={() => onDelete(experience.id)}
        />
      ))}
    </ListSection>
  )
}

export default Experience
