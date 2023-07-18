const routes = {
    landing:"/home",
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    orders: '/orders',
    order: (orderId) => (orderId ? `/order/:${orderId}` : '/order/:id'),
    providers: '/providers',
    restaurants: '/restaurants',
    suppliers: '/suppliers',
    provider: (providerId) => (providerId ? `/provider/:${providerId}` : '/provider/:id'),
    admin: {
        team: '/admin/team',
        providersAdmin: '/admin/providers'
    }
}
export default routes;