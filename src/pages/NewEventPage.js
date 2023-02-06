import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return (
    <>
      <h2>New Event</h2>
      <EventForm method="post" />
    </>
  );
};

export default NewEventPage;
