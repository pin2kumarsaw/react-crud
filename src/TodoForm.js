import React, { useState } from 'react';
// import "./TodoAdvance.css";

const TodoForm = (props) => {
  const { onClose, onSave, onDelete, todo, onChange } = props;
  return (
    <>
      <div className="container my-2">
        <div>
          <h3>Event Name</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Event name"
            name="eventName"
            value={todo?.eventName}
            onChange={onChange}
          />
        </div>
        <div className="my-2">
          <h4>Add Your Task Description</h4>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            name="desc"
            value={todo?.desc}
            onChange={onChange}
            rows="5"
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <button
              type="button"
              className="btn btn-primary me-4"
              onClick={() => onSave()}
            >
              Save
            </button>
            <button type="button" className="btn btn-warning" onClick={onClose}>
              Close
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
