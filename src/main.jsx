import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import DoctorDetails from "./component/DoctorDetails/DoctorDetails.jsx";
import Home from "./component/Home/Home.jsx";
import Appointments from "./component/Appointments/Appointments.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div> Loading ......</div>}>
            <Home></Home>
          </Suspense>
        ),
        path: "/",
        loader: () => fetch("/doctors.json"),
      },
      {
        path: "/doctor/:id",
        element: (
          <Suspense fallback={<div> Loading ......</div>}>
            <DoctorDetails></DoctorDetails>
          </Suspense>
        ),
        loader: () => fetch("/doctors.json"),
      },
      {
        path: "/appointments",
        element: <Appointments></Appointments>,
        loader: () => fetch("/doctors.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
