import ListSection from '../ListSection'
import ListItem from '../ListItem'

function Skill({ skill, showEditButton, onAdd, onEdit }) {
  return (
    <section className="list-section" aria-labelledby="title-skill">
      <h2 id="title-skill">Skill</h2>
      <p>{skill}</p>

      {showEditButton && (
        <button type="button" className="section-button" onClick={onEdit}>
          Edit Skill
        </button>
      )}
    </section>
  )
}

export default Skill
