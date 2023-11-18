import NotFound from 'NotFound';
import GoormMake from 'pages/GoormMake';
import LinkShare from 'pages/LinkShare';
import Main from 'pages/Main';
import Mypage from 'pages/Mypage';
import Detail from 'pages/[detailId]';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from 'router/Root';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Main /> },
        { path: '/mypage', element: <Mypage /> },
        { path: '/share', element: <LinkShare /> },
        { path: '/goorm', element: <GoormMake /> },
        { path: '/roomTest', element: <Detail />}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
