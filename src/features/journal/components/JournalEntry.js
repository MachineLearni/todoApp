import React from "react";
import { useDispatch } from "react-redux";
import { removeEntry, toggleEntryDone } from "../journalSlice";
import Confetti from "react-dom-confetti";

const JournalEntry = ({ children, id, isDone }) => {
  const dispatch = useDispatch();

  return (
    <div className={`entry`}>
      <div className="entry-actions-container">
        <button
          aria-label="Delete"
          className="remove"
          onClick={() => dispatch(removeEntry(id))}
        >
          Delete
        </button>
        <button
          aria-label="Completed"
          className="done"
          onClick={() => {
            dispatch(toggleEntryDone(id));
          }}
        >
          {isDone ? "Redo" : "Completed"}
          <Confetti active={isDone} config={{ spread: 360 }} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default JournalEntry;
