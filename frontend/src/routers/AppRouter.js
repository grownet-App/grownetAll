import { Route, Routes } from 'react-router-dom';
import roles_clientes from '../helpers/roles';
import routes from '../helpers/routes';
import CodeOtp from '../pages/Authentication/CodeOtp';
import LoginPage from '../pages/Authentication/LoginPage';
import OrderDetails from '../pages/BuyProcess/OrderDetails';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Products from '../pages/BuyProcess/Products';
import ProviderPage from '../pages/Temporal Juan/ProviderPage';
import ProvidersPage from '../pages/Temporal Juan/ProvidersPage';
import RegisterPage from '../pages/Authentication/RegisterPage';
import Restaurants from '../pages/BuyProcess/Restaurants';
import Suppliers from '../pages/BuyProcess/Suppliers';
import AdminProviders from '../pages/admin/AdminProviders';
import TeamPage from '../pages/admin/TeamPage';
import PublicRoute from './PublicRoute';


export default function AppRouter() {
    return (
        <Routes>
            <Route path={routes.landing} element={<HomePage />} exact />
            <Route exact path={routes.home} element={<PublicRoute />}>
                <Route path={routes.home} element={<HomePage />} exact />
            </Route>
            <Route exact path={routes.restaurants} element={<PublicRoute />}>
                <Route path={routes.restaurants} element={<Restaurants />} />
            </Route>
            <Route exact path={routes.codeOtp} element={<PublicRoute />}>
                <Route path={routes.codeOtp} element={<CodeOtp />} />
            </Route>
            <Route exact path={routes.products} element={<PublicRoute />}>
                <Route path={routes.products} element={<Products />} />
            </Route>
            <Route exact path={routes.details} element={<PublicRoute />}>
                <Route path={routes.details} element={<OrderDetails />} />
            </Route>
            <Route exact path={routes.suppliers} element={<PublicRoute />}>
                <Route path={routes.suppliers} element={<Suppliers />} />
            </Route>
            <Route exact path={routes.login} element={<PublicRoute />}>
                <Route exact path={routes.login} element={<LoginPage />} />
            </Route>
            <Route exact path={routes.register} element={<PublicRoute />}>
                <Route exact path={routes.register} element={<RegisterPage />} />
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