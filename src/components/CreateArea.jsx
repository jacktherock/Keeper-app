import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  /* Input Changes */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note); // App.js --> addNote()
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <form action="">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
