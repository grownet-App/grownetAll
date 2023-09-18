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
    editRestaurant: 'editRestaurant',
    record: '/record',
    pastRecord: '/pastRecord',
    detailsOrderPast: '/detailsOrderPast',
    reception: '/reception',
    upcomingRecord: '/upcomingRecord',
    order: (orderId) => (orderId ? `/order/:${orderId}` : '/order/:id'),
    restaurants: '/restaurants',
    suppliers: '/suppliers',
    supplier: (supplierId) => (supplierId ? `/supplier/:${supplierId}` : '/supplier/:id'),
    admin: {
        team: '/admin/team',
        suppliersAdmin: '/admin/suppliers'
    }
}
export default routes;