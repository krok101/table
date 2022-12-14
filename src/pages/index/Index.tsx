import { Container, Stack, Box } from '@mui/material';
import { useEffect, useState } from 'react'
import { Search, SelectList } from '../../components';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProduct } from "../../services/product/productSlice";
import Product, { Status } from '../../Types/product';
import ModalAnnul from './components/ModalAnnul/ModalAnnul';
import ProductsTable from './components/ProductsTable';

interface Filter {
  name: string,
  sum: number | null,
  qtu: number | null,
  volume: number | null,
  total: number | null,
  status: string,
}

export default function DataTable() {
  const { products, status } = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()
  const [selectedProduct, setSelectedProduct] = useState<Product[]>([])
  const [filter, setFilter] = useState<Filter>({
    name: '',
    sum: null,
    qtu: null,
    volume: null,
    total: null,
    status: '',
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
    if (filter.status !== '')
      result = result.filter(product => product.status === filter.status)
    return result
  }

  const handleChangeSearch = (field: keyof Filter, value: string) => {
    switch(field) {
      case 'name': return setFilter({ ...filter, name: value })
      case 'qtu': return setFilter({ ...filter, qtu: value === '' ? null : Number(value) })
      case 'sum': return setFilter({ ...filter, sum: value === '' ? null : Number(value) })
      case 'volume': return setFilter({ ...filter, volume: value === '' ? null : Number(value) })
      case 'total': return setFilter({ ...filter, total: value === '' ? null : Number(value) })
    }
  }

  const handleChangeSearchStatus = (value: string) => {
    setFilter({ ...filter, status: value })
  }

  return (
    <Container maxWidth="lg">
      <Stack direction='row' flexWrap='wrap'>
        {/* <Search label='Статус' type="string"/> */}
        <Search label='Название' type={'string'} onChange={(value) => handleChangeSearch('name', value)}/>
        <Search label='Сумма' type={'number'} onChange={(value) => handleChangeSearch('sum', value)}/>
        <Search label='Количество' type={'number'} onChange={(value) => handleChangeSearch('qtu', value)}/>
        <Search label='Объем' type={'number'} onChange={(value) => handleChangeSearch('volume', value)}/>
        <Search label='Всего' type={'number'} onChange={(value) => handleChangeSearch('total', value)}/>
        <SelectList value={filter.status} onChange={handleChangeSearchStatus} options={[...new Set(products.map(el => el.status))]} label='статус' />
      </Stack>
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