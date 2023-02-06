import { createBrowserRouter } from "react-router-dom";

import MainNavigationLayout from "./layouts/MainNavigationLayout";
import EventsLayout from "./layouts/EventsLayout";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {
  action as deleteEventAction,
  loader as eventDetailLoader,
} from "./pages/EventDetailPage";
import EventsPage, { loader } from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import ErrorPage from "./pages/ErrorPage";
import { action as submitAction } from "./components/EventForm";
import NewsletterPage, {
  action as newsletterAction,
} from "./pages/NewsletterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigationLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loader,
          },
          { path: "new", element: <NewEventPage />, action: submitAction },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: submitAction,
              },
            ],
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

export default router;
