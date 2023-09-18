import { View, Text } from 'react-native'
import React from 'react'

const Restaurants = () => {
  return (
    <View>
      <Text>Restaurants</Text>
    </View>
  )
}

export default Restaurants
// import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { availableRestaurants } from '../../config/urls.config'
// import { GlobalStyles } from '../../styles/styles'
// import axios from 'axios'

// const Restauranst = () => {
//   const [restaurants, setRestaurants] = useState([])

//   useEffect(() => {
//     axios
//       .get(availableRestaurants)
//       .then(function (response) {
//         console.log('response', response)
//         setRestaurants(response.data.customersChef)
//         console.log('response', response)
//       })
//       .catch(function (error) {
//         console.log('data de restaurantes', error)
//       })
//   }, [])

//   return (
//     <SafeAreaView>
//       <ScrollView contentContainerStyle={GlobalStyles.providers}>
//         {restaurants.map((restaurant, index) => (
//           <View key={index}>
//             <View style={GlobalStyles.providersCateg}>
//               <Text style={GlobalStyles.textSupplier}>
//                 {restaurant.account_name}
//               </Text>

//               <Image
//                 source={require('../../../assets/img/img_providers.png')}
//                 style={GlobalStyles.imgproviders}
//               />
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default Restauranst
