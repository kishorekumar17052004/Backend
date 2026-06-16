

const Product = ({ productName, productPrice, productCategory, productBrand }) => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Product Details</h2>
      <p>Name: {productName}</p>
      <p>Price: ₹{productPrice}</p>
      <p>Category: {productCategory}</p>
      <p>Brand: {productBrand}</p>
    </div>
    
    
    
    </>
  )
}

export default Product