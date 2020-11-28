import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="completeArea">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="listRow">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
