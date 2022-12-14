import { Stack } from '@mui/material';
import { Search, SelectList } from '../../../../components';
import Product from '../../../../Types/product';
import style from './style.module.css'

export interface IFilter {
  name: string,
  sum: number | null,
  qtu: number | null,
  volume: number | null,
  total: number | null,
  status: string,
  currency: string,
  deliveryDate: string,
}

interface FilterProps {
  filter: IFilter,
  products: Product[],
  setFilter: (arg: IFilter) => void,
}

const Filter = ({setFilter, filter, products}: FilterProps) => {
  const handleChangeSearch = (field: keyof IFilter, value: string) => {
    switch(field) {
      case 'name': return setFilter({ ...filter, name: value })
      case 'qtu': return setFilter({ ...filter, qtu: value === '' ? null : Number(value) })
      case 'sum': return setFilter({ ...filter, sum: value === '' ? null : Number(value) })
      case 'volume': return setFilter({ ...filter, volume: value === '' ? null : Number(value) })
      case 'total': return setFilter({ ...filter, total: value === '' ? null : Number(value) })
      case 'deliveryDate': return setFilter({ ...filter, deliveryDate: value})
    }
  }

  return (
    <Stack direction='column' flexWrap='wrap' height={'160px'}>
      <Search label='Название' width='250px' type={'string'} onChange={(value) => handleChangeSearch('name', value)}/>
      <Search label='Дата доставки' className={style.date} width='250px' type={'date'} onChange={(value) => handleChangeSearch('deliveryDate', value)}/>
      <Search label='Сумма' width='140px' type={'number'} onChange={(value) => handleChangeSearch('sum', value)}/>
      <Search label='Количество' width='140px' type={'number'} onChange={(value) => handleChangeSearch('qtu', value)}/>
      <Search label='Объем' width='140px' type={'number'} onChange={(value) => handleChangeSearch('volume', value)}/>
      <Search label='Всего' width='140px' type={'number'} onChange={(value) => handleChangeSearch('total', value)}/>
      <SelectList 
        label='Статус'
        value={filter.status}
        onChange={(value: string) => setFilter({ ...filter, status: value })}
        options={[...new Set(products.map(el => el.status))]}
      />
      <SelectList 
        label='Валюта'
        value={filter.currency}
        onChange={(value: string) => setFilter({ ...filter, currency: value })}
        options={[...new Set(products.map(el => el.currency))]}
      />
    </Stack>
)
}

export default Filter;