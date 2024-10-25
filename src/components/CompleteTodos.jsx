const style = {
  border: "2px solid#aacfd0",
  width: "400px",
  minheight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#c9dede",
};

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack, disabled } = props;
  return (
    <div style={style}>
      <p className="title">完了のTodo</p>
      <ul>
        {completeTodos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">Todoでした</p>
              <button disabled={disabled} onClick={() => onClickBack(index)}>
                戻す
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
