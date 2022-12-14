import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProduct } from "../../services/product/productSlice";

const Index = () => {
  const { products, status } = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()

  console.log('+++++++')
  console.log(products)
  console.log(status)
  console.log('=====')

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <>Index Page</>
  );
};

export default Index;