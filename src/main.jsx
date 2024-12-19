import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import About from './pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },

  {
    path: "/projects",
    element: <Projects />
  },

  {
    path: "/about",
    element: <About />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
