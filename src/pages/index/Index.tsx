import { Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react'
import { Search } from '../../components';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProduct } from "../../services/product/productSlice";
import Product from '../../Types/product';
import ModalAnnul from './components/ModalAnnul/ModalAnnul';
import ProductsTable from './components/ProductsTable';

interface Filter {
  name: string,
  sum: number | null,
  qtu: number | null,
  volume: number | null,
  total: number | null,
}

export default function DataTable() {
  const { products } = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()
  const [selectedProduct, setSelectedProduct] = useState<Product[]>([])
  const [filter, setFilter] = useState<Filter>({
    name: '',
    sum: null,
    qtu: null,
    volume: null,
    total: null,
  });

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  const getFilteredProducts = (products: Product[]) => {
    let result = products
    if (filter.name)
      result = result.filter(product => product.name.includes(filter.name))
    if (filter.qtu !== null)
      result = result.filter(product => product.qty === filter.qtu)
    if (filter.sum !== null)
      result = result.filter(product => product.sum === filter.sum)
    if (filter.volume !== null)
      result = result.filter(product => product.volume === filter.volume)
    if (filter.total !== null)
      result = result.filter(product => product.sum * product.qty === filter.total)
    return result
  }

  const handleChangeSearch = (field: keyof Filter, value: string) => {
    console.log(value)
    switch(field) {
      case 'name': return setFilter({ ...filter, name: value })
      case 'qtu': return setFilter({ ...filter, qtu: value === '' ? null : Number(value) })
      case 'sum': return setFilter({ ...filter, sum: value === '' ? null : Number(value) })
      case 'volume': return setFilter({ ...filter, volume: value === '' ? null : Number(value) })
      case 'total': return setFilter({ ...filter, total: value === '' ? null : Number(value) })
    }
  }

  return (
    <Container maxWidth="lg">
      <Stack direction='row'>
        {/* <Search label='Статус' type="string"/> */}
        <Search label='Сумма' type={'number'} onChange={(value) => handleChangeSearch('sum', value)}/>
        <Search label='Количество' type={'number'} onChange={(value) => handleChangeSearch('qtu', value)}/>
        <Search label='Объем' type={'number'} onChange={(value) => handleChangeSearch('volume', value)}/>
        <Search label='Название' type={'string'} onChange={(value) => handleChangeSearch('name', value)}/>
        <Search label='Всего' type={'number'} onChange={(value) => handleChangeSearch('total', value)}/>
      </Stack>
      <ProductsTable
        products={getFilteredProducts(products)}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <ModalAnnul products={getFilteredProducts(selectedProduct)}/>
    </Container>
  );
}