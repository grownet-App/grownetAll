"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var routes = {
  home: '/',
  login: '/login',
  register: '/register',
  account: '/account',
  orders: '/orders',
  order: function order(orderId) {
    return orderId ? "/order/:".concat(orderId) : '/order/:id';
  },
  providers: '/providers',
  provider: function provider(providerId) {
    return providerId ? "/provider/:".concat(providerId) : '/provider/:id';
  },
  admin: {
    team: '/admin/team',
    providersAdmin: '/admin/providers'
  }
};
var _default = routes;
exports["default"] = _default;