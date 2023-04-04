import { useDispatch, useSelector } from 'react-redux'
import { setProductsGlobal } from '../../store/slices/products.slices'
import './styles/searchfilters.css'

const SearchFilters = ({ categoriesSlice }) => {
  const allProducts = useSelector((state) => state.allProducts)
  const dispatch = useDispatch()

  const handleClickCategories = (id) => {
    if (id) {
      // realizo una busqueda de todos los productos q tenga categoria Id==xxx
      const productsFounded = allProducts?.filter(
        (element) => element.category.id == id,
      )

      dispatch(setProductsGlobal(productsFounded))
    } else {
      dispatch(setProductsGlobal(allProducts))
    }
  }

  return (
    <section className="container-filters-price-and-categories">
      <div className="container-filters2">
        <div className="container-filters__categories">
          <span>Categories</span>
          <i className="icon-down fa-solid fa-chevron-down"></i>
        </div>
        <div
          className="container-filters__allcategories"
          onClick={() => handleClickCategories()}
        >
          All products
        </div>
        {categoriesSlice?.map((categories) => (
          <div
            className="container-filters__allcategories"
            key={categories?.id}
            onClick={() => handleClickCategories(categories?.id)}
          >
            {categories.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SearchFilters
