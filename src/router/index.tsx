import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { ErrorPage } from 'Pages/ErrorPage/ErrorPage';
import { LazyComponent } from 'Pages/LazyComponent';
import { ContactPage } from 'Pages/ContactPage/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/inside',
        element: <div>Inside Page</div>,
      },
      {
        path: 'contacts/:contactId',
        element: <ContactPage />,
      },
      {
        path: 'lazy',
        element: <LazyComponent />,
      },
    ],
  },
  {
    path: '/outside',
    element: <div>Outside Page</div>,
  },
]);
