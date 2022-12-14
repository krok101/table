import { Container, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProduct } from '../../services/product/productSlice';
import Product from '../../Types/product';
import Filter, { IFilter } from './components/Filter/Filter';
import ModalAnnul from './components/ModalAnnul/ModalAnnul';
import ProductsTable from './components/ProductsTable';

export default function DataTable() {
  const { products, status } = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();
  const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);
  const [filter, setFilter] = useState<IFilter>({
    name: '',
    sum: null,
    qtu: null,
    volume: null,
    total: null,
    status: '',
    currency: '',
    deliveryDate: '',
  });

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const getFilteredProducts = (products: Product[]) => {
    let result = products;
    if (filter.name)
      result = result.filter(product => product.name.includes(filter.name));
    if (filter.qtu !== null)
      result = result.filter(product => product.qty === filter.qtu);
    if (filter.sum !== null)
      result = result.filter(product => product.sum === filter.sum);
    if (filter.volume !== null)
      result = result.filter(product => product.volume === filter.volume);
    if (filter.total !== null)
      result = result.filter(product => product.sum * product.qty === filter.total);
    if (filter.status !== '')
      result = result.filter(product => product.status === filter.status);
    if (filter.currency !== '')
      result = result.filter(product => product.currency === filter.currency);
    if (filter.deliveryDate !== '')
      result = result.filter(product => new Date(product.delivery_date).toLocaleDateString() === new Date(filter.deliveryDate).toLocaleDateString());
    return result;
  };

  return (
    <Container maxWidth="lg">
      <Filter setFilter={setFilter} filter={filter} products={products}/>
      {status === 'loading' ? (
        <Box>Загрузка данных...</Box>
      ) : (
        <ProductsTable
          products={getFilteredProducts(products)}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      <ModalAnnul products={getFilteredProducts(selectedProduct)}/>
    </Container>
  );
}