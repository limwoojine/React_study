import './css/TodoTemplate.css';

// children props는 <TodoList/>와 <TodoInsert/>를 가지고 있다.
function TodoTemplate({ children }) {
   return (
      <div className="TodoTemplate">
         <div className="app-title">TO DO LIST</div>
         <div className="content">{children}</div>
      </div>
   );
}

export default TodoTemplate;
