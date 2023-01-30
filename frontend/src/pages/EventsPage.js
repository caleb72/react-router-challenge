import DUMMY_EVENTS from '../store/event';
import EventsList from "../components/EventsList";


const EventsPage = () => {
  return (
    <>
      <h2>Events Page</h2>
      <EventsList events={DUMMY_EVENTS} />
    </>
  );
};

export default EventsPage;
