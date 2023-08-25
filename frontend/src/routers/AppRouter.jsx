import { Route, Routes } from 'react-router-dom';
import roles_clientes from '../helpers/roles';
import routes from '../helpers/routes';
import LoginPage from '../pages/Authentication/LoginPage';
import RegisterPage from '../pages/Authentication/RegisterPage';
import OrderDetails from '../pages/BuyProcess/OrderDetails';
import Products from '../pages/BuyProcess/Products';
import Restaurants from '../pages/BuyProcess/Restaurants';
import Suppliers from '../pages/BuyProcess/Suppliers';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import AdminProviders from '../pages/admin/AdminProviders';
import TeamPage from '../pages/admin/TeamPage';
import PublicRoute from './PublicRoute';
import Settings from '../pages/Settings/Settings';
import TermsAndConditions from '../pages/TermsAndConditions'
import SettingsRestaurants from '../pages/Settings/SettingsRestaurants';
import SettingsSuppliers from '../pages/Settings/SettingsSuppliers';
import OrderInformation from '../pages/BuyProcess/OrderInformation';
import OrderSuccessful from '../pages/BuyProcess/OrderSuccessful';
import FAQ from '../pages/Settings/FAQ';
import FirtsView from '../pages/BuyProcess/FirtsView';
import AddRestaurants from '../pages/Settings/AddRestaurants';
import Chat from '../pages/Chat/Chat';
import Record from '../pages/Record/Record';
import PastRecord from '../pages/Record/PastRecord/PastRecord';
import UpcomingRecord from '../pages/Record/UpcomingRecord/UpcomingRecord';
import DetailOrderPast from '../pages/Record/PastRecord/DetailOrderPast';
import Reception from '../pages/Record/PastRecord/Reception';
export default function AppRouter() {
    return (
        <Routes>
            <Route path={routes.landing} element={<HomePage />} exact />
            <Route exact path={routes.home} element={<PublicRoute />}>
                <Route path={routes.home} element={<HomePage />} exact />
            </Route>
            <Route exact path={routes.firtsView} element={<PublicRoute />}>
                <Route path={routes.firtsView} element={<FirtsView />} />
            </Route>
            <Route exact path={routes.addRestaurants} element={<PublicRoute />}>
                <Route path={routes.addRestaurants} element={<AddRestaurants />} />
            </Route>
            <Route exact path={routes.restaurants} element={<PublicRoute />}>
                <Route path={routes.restaurants} element={<Restaurants />} />
            </Route>
            <Route exact path={routes.products} element={<PublicRoute />}>
                <Route path={routes.products} element={<Products />} />
            </Route>
            <Route exact path={routes.details} element={<PublicRoute />}>
                <Route path={routes.details} element={<OrderDetails />} />
            </Route>
            <Route exact path={routes.orderInformation} element={<PublicRoute />}>
                <Route path={routes.orderInformation} element={<OrderInformation />} />
            </Route>
            <Route exact path={routes.orderSuccessful} element={<PublicRoute />}>
                <Route path={routes.orderSuccessful} element={<OrderSuccessful />} />
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
            <Route exact path={routes.settings} element={<PublicRoute />}>
                <Route exact path={routes.settings} element={<Settings />} />
            </Route>
            <Route exact path={routes.settingsRestaurants} element={<PublicRoute />}>
                <Route exact path={routes.settingsRestaurants} element={<SettingsRestaurants />} />
            </Route>
            <Route exact path={routes.settingsSuppliers} element={<PublicRoute />}>
                <Route exact path={routes.settingsSuppliers} element={<SettingsSuppliers />} />
            </Route>
            <Route exact path={routes.FAQ} element={<PublicRoute />}>
                <Route exact path={routes.FAQ} element={<FAQ />} />
            </Route>
            <Route exact path={routes.tAndC} element={<PublicRoute />}>
                <Route exact path={routes.tAndC} element={<TermsAndConditions />} />
            </Route>
            <Route exact path={routes.chat} element={<PublicRoute />}>
                <Route exact path={routes.chat} element={<Chat />} />
            </Route>
            <Route exact path={routes.record} element={<PublicRoute />}>
                <Route exact path={routes.record} element={<Record />} />
            </Route>
            <Route exact path={routes.pastRecord} element={<PublicRoute />}>
                <Route exact path={routes.pastRecord} element={<PastRecord />} />
            </Route>
            <Route exact path={routes.upcomingRecord} element={<PublicRoute />}>
                <Route exact path={routes.upcomingRecord} element={<UpcomingRecord />} />
            </Route>
            <Route exact path={routes.detailOrderPastupcomingRecord} element={<PublicRoute />}>
                <Route exact path={routes.detailOrderPast} element={<DetailOrderPast />} />
            </Route>
            <Route exact path={routes.reception} element={<PublicRoute />}>
                <Route exact path={routes.reception} element={<Reception />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>


    )
}