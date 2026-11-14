import { useState } from 'react'
import initialIdentity from './data/identity'
import initialExperiences from './data/experiences'
import initialEducations from './data/education'
import initialProjects from './data/project'
import FormIdentity from './components/identity/FormIdentity'
import Identity from './components/identity/Identity'
import Experience from './components/experience/Experience'
import FormExperience from './components/experience/FormExperience'
import Education from './components/education/Education'
import FormEducation from './components/education/FormEducation'
import Project from './components/project/Project'
import FormProject from './components/project/FormProject'

function App() {
  const [identity, setIdentity] = useState(initialIdentity)
  const [experiences, setExperiences] = useState(initialExperiences)
  const [educations, setEducations] = useState(initialEducations)
  const [projects, setProjects] = useState(initialProjects)
  const [isPreview, setIsPreview] = useState(false)
  const [editing, setEditing] = useState(null)

  function openForm(section, id = null) {
    setEditing({ section, id })
  }

  function closeForm() {
    setEditing(null)
  }

  function handleTogglePreview() {
    closeForm()
    setIsPreview((prev) => !prev)
  }

  function handleIdentitySubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    setIdentity({
      name: data.get('name'),
      job: data.get('job'),
      contacts: {
        phone: data.get('phone'),
        email: data.get('email'),
        address: data.get('address'),
      },
    })
    closeForm()
  }

  function makeListHandlers(setItems) {
    function handleSubmit(e) {
      e.preventDefault()
      const data = Object.fromEntries(new FormData(e.currentTarget))
      const { id } = editing

      if (id === null) {
        setItems((prev) => [...prev, { ...data, id: crypto.randomUUID() }])
      } else {
        setItems((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...data } : item)),
        )
      }
      closeForm()
    }

    function handleDelete(id) {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }

    return { handleSubmit, handleDelete }
  }

  const experienceHandlers = makeListHandlers(setExperiences)
  const educationHandlers = makeListHandlers(setEducations)
  const projectHandlers = makeListHandlers(setProjects)

  return (
    <main>
      <div className="wrapper toolbar">
        <button type="button" onClick={handleTogglePreview}>
          {isPreview ? 'Edit' : 'Preview'}
        </button>
      </div>

      <div className="wrapper cv">
        {editing?.section === 'identity' ? (
          <FormIdentity
            identity={identity}
            onSubmit={handleIdentitySubmit}
            onCancel={closeForm}
          />
        ) : (
          <Identity
            identity={identity}
            showEditButton={!isPreview}
            onEdit={() => openForm('identity')}
          />
        )}

        {editing?.section === 'experience' ? (
          <FormExperience
            experience={
              experiences.find((item) => item.id === editing.id) ?? null
            }
            onSubmit={experienceHandlers.handleSubmit}
            onCancel={closeForm}
          />
        ) : (
          <Experience
            experiences={experiences}
            showEditButton={!isPreview}
            onAdd={() => openForm('experience')}
            onEdit={(id) => openForm('experience', id)}
            onDelete={experienceHandlers.handleDelete}
          />
        )}

        {editing?.section === 'education' ? (
          <FormEducation
            education={
              educations.find((item) => item.id === editing.id) ?? null
            }
            onSubmit={educationHandlers.handleSubmit}
            onCancel={closeForm}
          />
        ) : (
          <Education
            educations={educations}
            showEditButton={!isPreview}
            onAdd={() => openForm('education')}
            onEdit={(id) => openForm('education', id)}
            onDelete={educationHandlers.handleDelete}
          />
        )}

        {editing?.section === 'project' ? (
          <FormProject
            project={projects.find((item) => item.id === editing.id) ?? null}
            onSubmit={projectHandlers.handleSubmit}
            onCancel={closeForm}
          />
        ) : (
          <Project
            projects={projects}
            showEditButton={!isPreview}
            onAdd={() => openForm('project')}
            onEdit={(id) => openForm('project', id)}
            onDelete={projectHandlers.handleDelete}
          />
        )}
      </div>
    </main>
  )
}

export default App
