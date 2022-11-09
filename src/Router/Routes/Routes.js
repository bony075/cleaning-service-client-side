import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddService from '../../Pages/AddService/AddService';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import Review from '../../Pages/Review/Review';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import SignUp from '../../Pages/SignUp/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
export default router;