import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import MyAccount from './pages/MyAccount';
import Cart from './pages/Cart';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/my-account',
    element: <MyAccount />,
  },
];

export default routes;
