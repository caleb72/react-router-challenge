import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ params }) {
  const id = params.id;

  const response = await fetch(
    `https://i1wx2m-8080.preview.csb.app/events/${id}`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export const action = async ({ request, params }) => {
  const eventId = params.id;
  const response = await fetch(
    `https://i1wx2m-8080.preview.csb.app/events/${eventId}`,
    { method: request.method }
  );

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
};
