import { Route, Routes } from "react-router-dom";
import routes from "../helpers/routes";
import LoginPage from "../pages/Authentication/LoginPage";
import RegisterPage from "../pages/Authentication/RegisterPage";
import FirstView from "../pages/BuyProcess/FirstView";
import OrderDetails from "../pages/BuyProcess/OrderDetails";
import OrderInformation from "../pages/BuyProcess/OrderInformation";
import OrderSuccessful from "../pages/BuyProcess/OrderSuccessful";
import Products from "../pages/BuyProcess/Products";
import Restaurants from "../pages/BuyProcess/Restaurants";
import Suppliers from "../pages/BuyProcess/Suppliers";
import Chat from "../pages/Chat/Chat";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import DetailOrderPast from "../pages/Record/PastRecord/DetailOrderPast";
import PastRecord from "../pages/Record/PastRecord/PastRecord";
import Reception from "../pages/Record/PastRecord/Reception";
import Record from "../pages/Record/Record";
import UpcomingRecord from "../pages/Record/UpcomingRecord/UpcomingRecord";
import AddRestaurants from "../pages/Settings/AddRestaurants";
import FAQ from "../pages/Settings/FAQ";
import Settings from "../pages/Settings/Settings";
import SettingsRestaurants from "../pages/Settings/SettingsRestaurants";
import SettingsSuppliers from "../pages/Settings/SettingsSuppliers";
import TermsAndConditions from "../pages/TermsAndConditions";
import PublicRoute from "./PublicRoute";
import Hola from "../pages/Settings/hola";
export default function AppRouter() {
  return (
    <Routes>
      <Route path={routes.landing} element={<HomePage />} exact />
      <Route exact path={routes.home} element={<PublicRoute />}>
        <Route path={routes.home} element={<HomePage />} exact />
      </Route>
      <Route exact path={routes.login} element={<PublicRoute />}>
        <Route exact path={routes.login} element={<LoginPage />} />
      </Route>
      <Route exact path={routes.register} element={<PublicRoute />}>
        <Route exact path={routes.register} element={<RegisterPage />} />
      </Route>
      <Route exact path={routes.tAndC} element={<PublicRoute />}>
        <Route exact path={routes.tAndC} element={<TermsAndConditions />} />
      </Route>

      {/* TODO CAMBIAR PublicRoute a PrivateRoute PARA LAS SIGUIENTES RUTAS: */}

      <Route exact path={routes.firstView} element={<PublicRoute />}>
        <Route path={routes.firstView} element={<FirstView />} />
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
      <Route exact path={routes.settings} element={<PublicRoute />}>
        <Route exact path={routes.settings} element={<Settings />} />
      </Route>
      <Route exact path={routes.settingsRestaurants} element={<PublicRoute />}>
        <Route exact path={routes.settingsRestaurants} element={<SettingsRestaurants />}/>
      </Route>
      <Route exact path={routes.settingsSuppliers} element={<PublicRoute />}>
        <Route exact path={routes.settingsSuppliers} element={<SettingsSuppliers />}/>
      </Route>
      <Route exact path={routes.hola} element={<PublicRoute />}>
        <Route exact path={routes.hola} element={<Hola />}/>
      </Route>
      <Route exact path={routes.FAQ} element={<PublicRoute />}>
        <Route exact path={routes.FAQ} element={<FAQ />} />
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
        <Route exact path={routes.upcomingRecord} element={<UpcomingRecord />}/>
      </Route>
      <Route exact path={routes.detailsOrderPastupcomingRecord} element={<PublicRoute />}>
        <Route exact path={routes.detailsOrderPast} element={<DetailOrderPast />}/>
      </Route>
      <Route exact path={routes.reception} element={<PublicRoute />}>
        <Route exact path={routes.reception} element={<Reception />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
