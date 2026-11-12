import { useState } from 'react'
import initialIdentity from './data/identity'
import initialExperiences from './data/experiences'
import FormIdentity from './components/identity/FormIdentity'
import Identity from './components/identity/Identity'
import Experience from './components/experience/Experience'
import FormExperience from './components/experience/FormExperience'

function App() {
  const [identity, setIdentity] = useState(initialIdentity)
  const [experiences, setExperiences] = useState(initialExperiences)
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

  function handleExperienceSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    if (editing.id === null) {
      setExperiences((prev) => [...prev, { ...data, id: crypto.randomUUID() }])
    } else {
      setExperiences((prev) =>
        prev.map((exp) => (exp.id === editing.id ? { ...exp, ...data } : exp)),
      )
    }
    closeForm()
  }

  function handleExperienceDelete(id) {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id))
  }

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
              experiences.find((exp) => exp.id === editing.id) ?? null
            }
            onSubmit={handleExperienceSubmit}
            onCancel={closeForm}
          />
        ) : (
          <Experience
            experiences={experiences}
            showEditButton={!isPreview}
            onAdd={() => openForm('experience')}
            onEdit={(id) => openForm('experience', id)}
            onDelete={handleExperienceDelete}
          />
        )}
      </div>
    </main>
  )
}

export default App
