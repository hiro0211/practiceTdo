const style = {
  border: "2px solid#aacfd0",
  width: "400px",
  minheight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTodo</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
