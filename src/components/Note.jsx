import React from "react";

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="gap">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
