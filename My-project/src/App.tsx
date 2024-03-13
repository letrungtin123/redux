import { addProduct, deleteProduct, editProduct, getProductById } from './app/features/products/productSlice'
import { decrement, increament, incrementByAmount } from './app/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './app/hook'

function App() {
  const { count } = useAppSelector((state) => state.counter)
  const { products, productInfo } = useAppSelector((state) => state.product)
  console.log(' productInfo:', productInfo)
  const dispatch = useAppDispatch()

  const data = {
    id: Math.ceil(Math.random() * 100),
    name: 'Product ' + Math.ceil(Math.random() * 100),
    price: Math.ceil(Math.random() * 100)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increament())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by amount</button>

      <button onClick={() => dispatch(addProduct(data))}>Add Product</button>

      <div className=''>
        {products && products.length === 0 && <h2>No products found</h2>}
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <div
              key={product.id}
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}
            >
              <h2>Id: {product.id}</h2>
              <h2> - Name: {product.name}</h2>
              <h2> - Price: {product.price}</h2>
              <button onClick={() => dispatch(deleteProduct(product.id))}>Delete Product</button>
              <button onClick={() => dispatch(getProductById(product))}>Get Product By Id</button>
              <button
                onClick={() =>
                  dispatch(
                    editProduct({
                      id: product.id,
                      name: 'Product ' + Math.ceil(Math.random() * 100) + ' edited',
                      price: Math.ceil(Math.random() * 100)
                    })
                  )
                }
              >
                Edit Product
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
