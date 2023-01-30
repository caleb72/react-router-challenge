import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

import DUMMY_EVENTS from "../store/event";

const EventDetailPage = () => {
  const params = useParams();

  const event = DUMMY_EVENTS.find((event) => event.id === params.id);

  return <EventItem event={event} />;
};

export default EventDetailPage;
