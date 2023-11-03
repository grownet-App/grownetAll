import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import axios from '../../../axiosConfig'
import Favorites from '../../components/buyingProcess/Favorites'
import ProductCard from '../../components/buyingProcess/ProductCards'
import ProductCategories from '../../components/buyingProcess/ProductCategories'
import ProductSearcher from '../../components/buyingProcess/ProductSearch'
import ProductsFind from '../../components/buyingProcess/ProductsFind'
import { supplierProducts } from '../../config/urls.config'
import useOrderStore from '../../store/useOrderStore'
import useTokenStore from '../../store/useTokenStore'
import { ProductsStyle } from '../../styles/ProductsStyle'

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
  const [currentPage, setCurrentPage] = useState(1)
  const [isFetchingMore, setIsFetchingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const fetchProducts = async (page) => {
    const requestBody = {
      id: selectedSupplier.id,
      country: countryCode,
      accountNumber: selectedRestaurant.accountNumber,
      page,
    }
    try {
      setIsFetchingMore(true)
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
      if (page !== 0) {
        setArticles((prevProducts) => [...prevProducts, ...productsWithTax])
        setProducts((prevProducts) => [...prevProducts, ...productsWithTax])
      } else {
        setArticles(productsWithTax)
        setProducts(productsWithTax)
      }
      setHasMore(false)
    } catch (error) {
      console.error('Error al obtener los productos del proveedor:', error)
    }
  }

  useEffect(() => {
    if (hasMore && !isFetchingMore) {
      fetchProducts(currentPage)
        .then(() => {
          setIsFetchingMore(false)
        })
        .catch((error) => {
          console.error('Error al cargar más productos:', error)
          setIsFetchingMore(false)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const handleLoadMore = () => {
    if (!hasMore && !isFetchingMore) {
      setHasMore(true)
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1
        return nextPage
      })
    }
  }

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

    // SCROLL PAGINATION
    if (offsetY >= contentHeight - screenHeight - 20) {
      handleLoadMore()
    }
  }

  return (
    <View style={styles.container}>
      <ProductSearcher
        products={articlesToPay}
        setShowSearchResults={setShowSearchResults}
        resetInput={resetInput}
      />
      <SafeAreaView style={ProductsStyle.containerCards}>
        <ScrollView onScroll={handleScroll} onMomentumScrollEnd={handleScroll}>
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
          {isFetchingMore && (
            <View style={styles.loadingMore}>
              <ActivityIndicator size="large" color="#026CD2" />
            </View>
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
  loadingMore: {
    paddingVertical: 20,
    alignItems: 'center',
  },
})
