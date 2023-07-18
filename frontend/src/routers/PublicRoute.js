import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';
export default function PublicRoute() {

    const location = useLocation();

     const {isLogged} = useAuth(); 
/*     const user = {id:1, role:'regular' }; */
    if (isLogged()) {
        return <Navigate to={{pathname: routes.orders}} state={{from: location}}  /> 
    }

    return  <Outlet />;

}