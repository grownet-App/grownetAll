const routes = {
    landing:"/home",
    home: '/',
    login: '/login',
    register: '/register',
    addRestaurants: '/addRestaurants',
    firstView: '/firstView',
    products: '/products',
    details: '/details',
    orderInformation: '/orderInformation',
    orderSuccessful: '/orderSuccessful',
    settings: '/settings',
    settingsRestaurants: '/settingsRestaurants',
    settingsSuppliers: '/settingsSuppliers',
    FAQ: '/FAQ',
    tAndC: '/tAndC',
    record: '/record',
    pastRecord: '/pastRecord',
    detailsOrderPast: '/detailsOrderPast',
    reception: '/reception',
    upcomingRecord: '/upcomingRecord',
    chat: '/chat',
    order: (orderId) => (orderId ? `/order/:${orderId}` : '/order/:id'),
    restaurants: '/restaurants',
    suppliers: '/suppliers',
    provider: (providerId) => (providerId ? `/provider/:${providerId}` : '/provider/:id'),
    admin: {
        team: '/admin/team',
        providersAdmin: '/admin/providers'
    }
}
export default routes;