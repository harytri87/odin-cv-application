import { formatDate } from '../utilities.js'

function ListItem({
  title,
  subtitle,
  description,
  startDate,
  endDate,
  location,
  showActions,
  onEdit,
  onDelete,
}) {
  return (
    <div className="grid-wrapper">
      <div className="details">
        <div className="item-title">{title}</div>
        {subtitle && <div className="item-subtitle">{subtitle}</div>}
        {description && <p>{description}</p>}
      </div>

      <div className="dates-location">
        <div>
          {startDate && (
            <span>
              {`${formatDate(startDate)} - ${endDate ? formatDate(endDate) : 'Present'}`}
            </span>
          )}
          {location && <address>{location}</address>}
        </div>

        {showActions && (
          <div className="action-buttons">
            <button
              className="transparent-button"
              type="button"
              aria-label={`Edit ${title}`}
              title="Edit"
              onClick={onEdit}
            >
              <svg aria-hidden="true">
                <use href="/icons.svg#edit-icon" />
              </svg>
            </button>
            <button
              className="transparent-button"
              type="button"
              aria-label={`Delete ${title}`}
              title="Delete"
              onClick={onDelete}
            >
              <svg aria-hidden="true">
                <use href="/icons.svg#delete-icon" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListItem
