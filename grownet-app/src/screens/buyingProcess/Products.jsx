import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native'
import axios from '../../../axiosConfig.'
import ProductCategories from '../../components/buyingProcess/ProductCategories'
import Favorites from '../../components/buyingProcess/Favorites'
import ProductCard from '../../components/buyingProcess/ProductCards'
import ProductSearcher from '../../components/buyingProcess/ProductSearch'
import ProductsFind from '../../components/buyingProcess/ProductsFind'
import useOrderStore from '../../store/useOrderStore'
import useTokenStore from '../../store/useTokenStore'
import { supplierProducts } from '../../config/urls.config'
import { ProductsStyle } from '../../styles/ProductsStyle'
import { useTranslation } from 'react-i18next'
import { Ionicons } from '@expo/vector-icons'

export default function Products() {
  const [blurIntensity, setBlurIntensity] = useState(30)
  const { token, countryCode } = useTokenStore()
  const [showFavorites, setShowFavorites] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [products, setProducts] = useState([])
  const [articles, setArticles] = useState(products)
  const { articlesToPay, selectedSupplier, selectedRestaurant } =
    useOrderStore()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [resetInput, setResetInput] = useState(0)

  const fetchProducts = async () => {
    const requestBody = {
      id: selectedSupplier.id,
      country: countryCode,
      accountNumber: selectedRestaurant.accountNumber,
    }

    try {
      const response = await axios.post(`${supplierProducts}`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const defaultProducts = response.data.products

      const productsWithTax = defaultProducts
        .filter((product) => product.prices.some((price) => price.nameUoms))
        .map((product) => {
          const pricesWithTax = product.prices.map((price) => {
            const priceWithTaxCalculation = (
              price.price +
              price.price * product.tax
            ).toFixed(2)
            return {
              ...price,
              priceWithTax:
                isNaN(priceWithTaxCalculation) ||
                parseFloat(priceWithTaxCalculation) === 0
                  ? null
                  : priceWithTaxCalculation,
            }
          })

          return {
            ...product,
            amount: 0,
            uomToPay: product.prices[0].nameUoms,
            idUomToPay: product.prices[0].id,
            prices: pricesWithTax,
          }
        })
        .filter((product) =>
          product.prices.some(
            (price) => price.priceWithTax && parseFloat(price.priceWithTax) > 0,
          ),
        )
      useOrderStore.setState({ articlesToPay: productsWithTax })
      setArticles(productsWithTax)
      setProducts(productsWithTax)
    } catch (error) {
      console.error('Error al obtener los productos del proveedor:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts()
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetInputSearcher = () => {
    setResetInput((prevKey) => prevKey + 1)
  }

  const toggleShowFavorites = async () => {
    setShowFavorites(!showFavorites)
    setSelectedCategory('All')
    resetInputSearcher()

    try {
      await fetchProducts()
    } catch (error) {
      console.error('Error al obtener productos al mostrar favoritos:', error)
    }
  }

  const handleAmountChange = (productId, newAmount) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === productId ? { ...article, amount: newAmount } : article,
      ),
    )
    const updatedArticlesToPay = articles.map((article) =>
      article.id === productId ? { ...article, amount: newAmount } : article,
    )

    useOrderStore.setState({ articlesToPay: updatedArticlesToPay })
  }

  const handleUomChange = (productId, newUomToPay) => {
    const updatedArticlesToPay = articles.map((article) => {
      if (article.id === productId) {
        const selectedPrice = article.prices.find(
          (price) => price.nameUoms === newUomToPay,
        )
        return {
          ...article,
          uomToPay: newUomToPay,
          idUomToPay: selectedPrice.id,
          priceWithTax: selectedPrice.priceWithTax,
        }
      }
      return article
    })
    setArticles(updatedArticlesToPay)
    useOrderStore.setState({ articlesToPay: updatedArticlesToPay })
  }

  const productsCategory =
    selectedCategory === 'All'
      ? ['All', ...new Set(articles.map((article) => article.nameCategorie))]
      : ['All', selectedCategory]

  const filterCategories = (category) => {
    setSelectedCategory(category)
    setShowFavorites(false)
    resetInputSearcher()
  }

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent

    const offsetY = contentOffset.y
    const contentHeight = contentSize.height
    const screenHeight = layoutMeasurement.height

    const maxScroll = contentHeight - screenHeight

    if (offsetY >= maxScroll - 5) {
      setBlurIntensity(0)
    } else {
      setBlurIntensity(30)
    }
  }
  const { t } = useTranslation()

  //Filtro
  const [showProductSearch, setShowProductSearch] = useState(false)

  const toggleProductSearch = () => {
    setShowProductSearch(!showProductSearch)
  }
  return (
    <View style={styles.container}>
      <View style={styles.tittleDiv}>
        <Text style={styles.textTittle}>
          {t('stackNavigator.makeYourOrder')}
        </Text>
        <TouchableOpacity
          style={styles.iconFilter}
          onPress={toggleProductSearch}
        >
          <Ionicons name="search-circle-outline" size={32} color="#04444f" />
        </TouchableOpacity>
      </View>

      {showProductSearch && (
        <ProductSearcher
          products={articlesToPay}
          setShowSearchResults={setShowSearchResults}
          resetInput={resetInput}
        />
      )}
      <SafeAreaView style={ProductsStyle.containerCards}>
        <ScrollView onScroll={handleScroll}>
          {showSearchResults ? (
            <ProductsFind
              onAmountChange={handleAmountChange}
              onUomChange={handleUomChange}
            />
          ) : (
            <>
              {showFavorites ? (
                <Favorites
                  onAmountChange={handleAmountChange}
                  onUomChange={handleUomChange}
                  fetchFavorites={fetchProducts}
                  opacity
                />
              ) : (
                <>
                  {articles
                    .filter((article) => {
                      if (selectedCategory === 'All') {
                        return true
                      }
                      return article.nameCategorie === selectedCategory
                    })
                    .map((article) => (
                      <ProductCard
                        key={article.id}
                        productData={article}
                        onAmountChange={handleAmountChange}
                        onUomChange={handleUomChange}
                        fetchFavorites={fetchProducts}
                      />
                    ))}
                </>
              )}
            </>
          )}
          <View style={{ height: 220 }} />
        </ScrollView>
      </SafeAreaView>
      <View style={ProductsStyle.viewCategories} />
      <ProductCategories
        showFavorites={showFavorites}
        toggleShowFavorites={toggleShowFavorites}
        categoriesProduct={productsCategory}
        filterCategory={filterCategories}
        blurIntensity={blurIntensity}
        selectedCategory={selectedCategory}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  textTittle: {
    fontFamily: 'PoppinsSemi',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 18,
    color: '#04444f',
  },
  tittleDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFilter: {
    position: 'relative',
    left: 45,
  },
})
