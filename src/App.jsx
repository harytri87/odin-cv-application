import { useState } from 'react'
import initialIdentity from './data/identity'
import FormIdentity from './components/identity/FormIdentity'
import Identity from './components/identity/Identity'

function App() {
  const [identity, setIdentity] = useState(initialIdentity)
  const [isPreview, setIsPreview] = useState(false)
  const [editingId, setEditingId] = useState(null)

  function openForm(id) {
    setEditingId(id)
  }

  function closeForm() {
    setEditingId(null)
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

  return (
    <main>
      <div className="wrapper toolbar">
        <button type="button" onClick={handleTogglePreview}>
          {isPreview ? 'Edit' : 'Preview'}
        </button>
      </div>

      <div className="wrapper cv">
        {editingId === 'identity' ? (
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
      </div>
    </main>
  )
}

export default App
