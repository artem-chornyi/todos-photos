import { Home, Photos, Todos } from '../../pages';
import routeNames from './routeNames';

const routes = [
    {
        path: routeNames.HOME,
        element: <Home/>,
    },
    {
        path: routeNames.PHOTOS,
        element: <Photos/>,
    },
    {
        path: routeNames.TODOS,
        element: <Todos/>,
    }
];

export default routes;