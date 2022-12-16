import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteUser} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    onDeleteUser(id)
  }
  return (
    <li className="todo-item">
      <div>
        <p className="todo-heading">{title}</p>
      </div>
      <div>
        <button className="delete-btn" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
