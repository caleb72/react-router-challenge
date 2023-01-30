import { createBrowserRouter } from "react-router-dom";

import MainNavigationLayout from "./layouts/MainNavigationLayout";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigationLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:id", element: <EventDetailPage /> },
      { path: "events/:id/edit", element: <EditEventPage /> },
    ],
  },
]);

export default router;
