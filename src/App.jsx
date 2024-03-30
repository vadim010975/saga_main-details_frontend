import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import List from './components/List';
import Details from './components/Details';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: List,
      },
      {
        path: '/:id/details',
        Component: Details,
      },
      {
        path: '/error',
        Component: Error,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
