import { FC } from 'react';
import { TableCell, TableContainer, TableHead, Table, TableRow, TableBody, Checkbox, TableFooter } from "@mui/material"
import Product from "../../../../Types/product"

interface ProductsTableProps {
  products: Product[],
  selectedProduct: Product[],
  setSelectedProduct: (products: Product[]) => void,
}

const ProductsTable: FC<ProductsTableProps> = ({products, selectedProduct, setSelectedProduct}) => {
  const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct(event.target.checked ? products : [])
  };

  const handleChange = (product: Product) => {
    if (selectedProduct.includes(product)) {
      setSelectedProduct(selectedProduct.filter(p => p !== product))
    } else {
      setSelectedProduct([...selectedProduct, product])
    }
  };

  const getTotal = (product: Product): string => {
    return product.sum * product.qty + product.currency
  }

  const getSelectetQty = () => selectedProduct.reduce((result, product) => result += product.qty, 0)
  const getSelectedValume = () => selectedProduct.reduce((result, product) => result += product.volume, 0)

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                onChange={handleChangeAll}
                checked={selectedProduct.length === products.length && !!selectedProduct.length }
                indeterminate={selectedProduct.length > 0 && selectedProduct.length !== products.length}
              />
            </TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Сумма</TableCell>
            <TableCell align="right">Количество</TableCell>
            <TableCell align="right">Объем</TableCell>
            <TableCell align="right">Название</TableCell>
            <TableCell align="right">Дата доставки</TableCell>
            <TableCell align="right">Валюта</TableCell>
            <TableCell align="right">Всего</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Checkbox
                  onChange={() => handleChange(product)}
                  checked={selectedProduct.includes(product)}
                />
              </TableCell>
              <TableCell align="right">{product.status}</TableCell>
              <TableCell align="right">{product.sum}</TableCell>
              <TableCell align="right">{product.qty}</TableCell>
              <TableCell align="right">{product.volume}</TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.delivery_date}</TableCell>
              <TableCell align="right">{product.currency}</TableCell>
              <TableCell align="right">{getTotal(product)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Общее количество: {getSelectetQty()}</TableCell>
            <TableCell align="right">Общий обьем: {getSelectedValume()}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default ProductsTable