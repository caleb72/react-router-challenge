import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  const fallback = <p style={{ textAlign: "center" }}>Loading...</p>;

  const resolver = (loadedEvents) => <EventsList events={loadedEvents} />;

  return (
    <Suspense fallback={fallback}>
      <Await resolve={events}>{resolver}</Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("https://i1wx2m-8080.preview.csb.app/events");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
