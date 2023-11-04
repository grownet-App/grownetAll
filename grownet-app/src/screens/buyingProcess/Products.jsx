import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import axios from '../../../axiosConfig'
import ProductCategories from '../../components/buyingProcess/ProductCategories'
import Favorites from '../../components/buyingProcess/Favorites'
import ProductCard from '../../components/buyingProcess/ProductCards'
import ProductSearcher from '../../components/buyingProcess/ProductSearch'
import ProductsFind from '../../components/buyingProcess/ProductsFind'
import useOrderStore from '../../store/useOrderStore'
import useTokenStore from '../../store/useTokenStore'
import { supplierCategorie, supplierProducts } from '../../config/urls.config'
import { ProductsStyle } from '../../styles/ProductsStyle'

export default function Products() {
  const { token, countryCode } = useTokenStore()
  const [showFavorites, setShowFavorites] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [products, setProducts] = useState([])
  const [articles, setArticles] = useState(products)
  const { articlesToPay, selectedSupplier, selectedRestaurant, categories } =
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
        .map((product) => ({
          ...product,
          amount: 0,
          uomToPay: product.prices[0].nameUoms,
          idUomToPay: product.prices[0].id,
          prices: product.prices.map((price) => ({
            ...price,
            priceWithTax: (price.price + price.price * product.tax).toFixed(2),
          })),
        }))
      useOrderStore.setState({ articlesToPay: productsWithTax })
      useOrderStore.setState({ categories: productsWithTax })
      setArticles(productsWithTax)
      setProducts(productsWithTax)
    } catch (error) {
      console.error('Error al obtener los productos del proveedor:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (articlesToPay && articlesToPay.length > 0) {
        setArticles(articlesToPay)
        setProducts(articlesToPay)
      } else {
        await fetchProducts()
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchProductsByCategory = async (categoryId) => {
    if (categoryId === 'All') {
      await fetchProducts()
      return
    }
    const requestBody = {
      supplier: selectedSupplier.id,
      categorie: categoryId,
      country: countryCode,
      accountNumber: selectedRestaurant.accountNumber,
    }

    try {
      const response = await axios.post(supplierCategorie, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const categorizedProducts = response.data.products

      const productsWithTax = categorizedProducts
        .filter((product) => product.prices.some((price) => price.nameUoms))
        .map((product) => ({
          ...product,
          amount: 0,
          uomToPay: product.prices[0].nameUoms,
          idUomToPay: product.prices[0].id,
          prices: product.prices.map((price) => ({
            ...price,
            priceWithTax: (price.price + price.price * product.tax).toFixed(2),
          })),
        }))
      useOrderStore.setState({ articlesToPay: productsWithTax })

      setProducts(productsWithTax)
      setArticles(productsWithTax)
    } catch (error) {
      console.error('Error al obtener los productos por categoría:', error)
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

  const allCategories = [
    'All',
    ...new Set(categories.map((article) => article.nameCategorie)),
  ]
  const productsCategory = allCategories

  const filterCategories = async (category, categoryId) => {
    setSelectedCategory(category)

    setShowFavorites(false)
    resetInputSearcher()
    try {
      await fetchProductsByCategory(categoryId)
    } catch (error) {
      console.error('Error al obtener productos al mostrar categoría:', error)
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
        <ScrollView>
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
})
