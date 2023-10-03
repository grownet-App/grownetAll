import Constants from 'expo-constants'

export const loginApiUrl = 'http://localhost:5000/login'

export const registerApiUrl = 'http://localhost:5000/register'

export const otpApiUrl = Constants.expoConfig.extra.OtpUrl

export const validationApiUrl = Constants.expoConfig.extra.ValidationUrl

export const onlyCountries = Constants.expoConfig.extra.countriesUrl

export const ApiSuppliers = Constants.expoConfig.extra.suppliersUrl

export const availableRestaurants = Constants.expoConfig.extra.restaurantsUrl

export const supplierProducts = Constants.expoConfig.extra.suppliersProducts

export const selectedCategory = Constants.expoConfig.extra.selectedCategory
