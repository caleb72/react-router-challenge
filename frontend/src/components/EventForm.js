import { useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  console.log(method);
  console.log(event);

  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..", { relative: "path" });
  }

  function submitHandler(e) {
    e.preventDefault();
    alert(method);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required value="APPLE" />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default EventForm;
