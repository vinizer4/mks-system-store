import ProductSkeleton from "../ProductSkeleton"

const ProductListSkeleton = () => {
  return (
    <>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (<ProductSkeleton key={index} />))
      }
    </>
  )
}

export default ProductListSkeleton
