interface Product {
  id?: string,
  name: string,
  price: number,
  quantity: number,
  isLimited: boolean,
  locations?: string[]
}

export default Product;
