import { Home, Photos, Todos, NotFoundPage } from '../../pages';
import routeNames from './routeNames';

const routes = [
    {
        index: true,
        element: <Home/>,
    },
    {
        path: routeNames.PHOTOS,
        element: <Photos/>,
    },
    {
        path: routeNames.TODOS,
        element: <Todos/>,
    },
    {
        path: routeNames.NOTFOUNDPAGE,
        element: <NotFoundPage/>,
    }
];

export default routes;