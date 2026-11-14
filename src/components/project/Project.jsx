import ListSection from '../ListSection'
import ListItem from '../ListItem'

function Project({ projects, showEditButton, onAdd, onEdit, onDelete }) {
  return (
    <ListSection
      title="Project"
      addLabel="Add new project"
      showEditButton={showEditButton}
      onAdd={onAdd}
    >
      {projects.map((project) => (
        <ListItem
          key={project.id}
          title={project.name}
          subtitle={project.tool}
          description={project.projectDescription}
          startDate={project.startDate}
          endDate={project.endDate}
          showActions={showEditButton}
          onEdit={() => onEdit(project.id)}
          onDelete={() => onDelete(project.id)}
        />
      ))}
    </ListSection>
  )
}

export default Project
