import { useParams } from "react-router-dom";
import EventForm from "../components/EventForm";

import DUMMY_EVENTS from "../store/event";

const EditEventPage = () => {
  const params = useParams();

  const event = DUMMY_EVENTS.find((event) => event.id === params.id);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>Edit Event</h2>
      <EventForm method="EDIT" event={event} />
    </>
  );
};

export default EditEventPage;
