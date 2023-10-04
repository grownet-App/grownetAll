import 'dotenv/config'

export default ({ config }) => ({
  ...config,
  extra: {
    BaseUrl: process.env.EXPO_PUBLIC_BASE_URL,
    OtpUrl: process.env.EXPO_PUBLIC_OTP_URL,
    ValidationUrl: process.env.EXPO_PUBLIC_VALIDATION_URL,
    countriesUrl: process.env.EXPO_PUBLIC_COUNTRIES_URL,
    suppliersUrl: process.env.EXPO_PUBLIC_SUPPLIERS_URL,
    restaurantsUrl: process.env.EXPO_PUBLIC_RESTAURANTS_URL,
    suppliersProducts: process.env.EXPO_PUBLIC_SUPPLIERS_PRODUCTS,
    selectedCategory: process.env.EXPO_PUBLIC_SELECTED_CATEGORY,
    allCategories: process.env.EXPO_PUBLIC_ALL_CATEGORIES,
    urlImage: process.env.EXPO_PUBLIC_IMAGE_URL,
  },
})
