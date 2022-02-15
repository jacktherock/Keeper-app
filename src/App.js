import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import createNote from "./components/createNote";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  /* Add New Note */
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  /* Delete New Note */
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {notes.map(createNote)} */}

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
