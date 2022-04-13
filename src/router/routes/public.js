import { Home, Photos, Todos, NotFoundPage, SinglePage } from '../../pages';
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
        path: routeNames.TODOS_BY_ID,
        element: <SinglePage/>,
    },
    {
        path: routeNames.NOTFOUNDPAGE,
        element: <NotFoundPage/>,
    }
];

export default routes;