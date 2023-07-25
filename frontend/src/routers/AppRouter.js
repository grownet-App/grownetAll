import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';import Restaurants from '../pages/Restaurants';
import LoginPage from '../pages/LoginPage';
import CodeOtp from '../pages/CodeOtp';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import ProvidersPage from '../pages/ProvidersPage';
import ProviderPage from '../pages/ProviderPage';
import TeamPage from '../pages/admin/TeamPage';
import AdminProviders from '../pages/admin/AdminProviders'
import NotFoundPage from '../pages/NotFoundPage';
import OrdersPage from '../pages/OrdersPage';
import OrderPage from '../pages/OrderPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles_clientes from '../helpers/roles';
import routes from '../helpers/routes';
import Suppliers from '../pages/Suppliers';


export default function AppRouter() {
    return (


        <Routes>
            <Route path={routes.landing} element={<HomePage />} exact />

            <Route exact path={routes.home} element={<PublicRoute />}>
                <Route path={routes.home} element={<HomePage />} exact />
            </Route>
            <Route exact path={routes.restaurants} element={<PublicRoute />}>
                <Route path={routes.restaurants} element={<Restaurants />}/>
            </Route>
            <Route exact path={routes.codeOtp} element={<PublicRoute />}>
                <Route path={routes.codeOtp} element={<CodeOtp />}/>
            </Route>
            <Route exact path={routes.suppliers} element={<PublicRoute />}>
                <Route path={routes.suppliers} element={<Suppliers />}/>
            </Route>
            <Route exact path={routes.login} element={<PublicRoute />}>
                <Route exact path={routes.login} element={<LoginPage />} />
            </Route>
            <Route exact path={routes.register} element={<PublicRoute />}>
                <Route exact path={routes.register} element={<RegisterPage />} />
            </Route>

            <Route exact path={routes.account} element={<PublicRoute />}>
                <Route exact path={routes.account} element={<AccountPage />} />
            </Route>
            <Route exact path={routes.orders} element={<PublicRoute />}>
                <Route exact path={routes.orders} element={<OrdersPage />} />
            </Route>
            <Route exact path={routes.order()} element={<PublicRoute />}>
                <Route exact path={routes.order()} element={<OrderPage />} />
            </Route>
            <Route exact path={routes.providers} element={<PublicRoute />}>
                <Route exact path={routes.providers} element={<ProvidersPage />} />
            </Route>
            <Route exact path={routes.provider()} element={<PublicRoute />}>
                <Route exact path={routes.provider()} element={<ProviderPage />} />
            </Route>
            <Route exact path={routes.admin.team} element={<PublicRoute hasRole={roles_clientes.admin} />}>
                <Route exact path={routes.admin.team} element={<TeamPage />} />
            </Route>
            <Route exact path={routes.admin.providersAdmin} element={<PublicRoute hasRole={roles_clientes.admin} />}>
                <Route exact path={routes.admin.providersAdmin} element={<AdminProviders />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>


    )
}