import React from "react";
import Note from "./Note";

const createNote = (noteItem) => {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
};

export default createNote;
