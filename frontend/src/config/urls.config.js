export const registerApiUrl = 'http://localhost:5000/register'

// AUTHENTICATION
export const otpApiUrl = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/authenticate/login'
export const validationApiUrl = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/authenticate/validateTelephone'
export const onlyCountries = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/countries/all'

// RESTAURANTS
export const availableRestaurants = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/customers/chef'
export const availableSuppliers = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/suppliers/customer'

// CATEGORIES
export const allCategories = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/categories/all'
export const selectedCategory = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/categoriesProducts/products/{id}'

// PRODUCTS
export const supplierProducts = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/products/supplier'

// FAVORITES
export const allFavorites = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/products/favoritesBySupplier'
export const addRemoveFavorite = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/products/favorite'

// ORDERS RECORD
export const createStorageOrder = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/orders/create'
export const allStorageOrders = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/orders/all'
export const selectedStorageOrder = 'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/api/orders'
