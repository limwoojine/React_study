import './css/TodoListItem.css';
import { MdOutlineRemoveCircle, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import classnames from 'classnames';

function TodoListItem({ todo, onRemove, onToggle }) {
   const { id, text, checked } = todo;
   return (
      <div className="TodoListItem">
         {/* className = "checkbox " */}
         <div className={classnames('checkbox', { checked })} onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div
            className="remove"
            onClick={() => {
               onRemove(id);
            }}
         >
            <MdOutlineRemoveCircle />
         </div>
      </div>
   );
}

export default TodoListItem;
