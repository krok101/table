import { FC } from 'react';
import { TableCell, TableContainer, TableHead, Table, TableRow, TableBody, Checkbox, TableFooter } from '@mui/material';
import Product from '../../../../Types/product';

interface ProductsTableProps {
  products: Product[],
  selectedProduct: Product[],
  setSelectedProduct: (products: Product[]) => void,
}

const ProductsTable: FC<ProductsTableProps> = ({products, selectedProduct, setSelectedProduct}) => {
  const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct(event.target.checked ? products : []);
  };

  const handleChange = (product: Product) => {
    if (selectedProduct.includes(product)) {
      setSelectedProduct(selectedProduct.filter(p => p !== product));
    } else {
      setSelectedProduct([...selectedProduct, product]);
    }
  };

  const getTotal = (product: Product): string => {
    return product.sum * product.qty + product.currency;
  };

  const getSelectetQty = () => selectedProduct.reduce((result, product) => result += product.qty, 0);
  const getSelectedValume = () => selectedProduct.reduce((result, product) => result += product.volume, 0);

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={'20px'} align="left">
              <Checkbox
                onChange={handleChangeAll}
                checked={selectedProduct.length === products.length && !!selectedProduct.length }
                indeterminate={selectedProduct.length > 0 && selectedProduct.length !== products.length}
              />
            </TableCell>
            <TableCell width={'80px'} align="center">Статус</TableCell>
            <TableCell width={'50px'} align="center">Сумма</TableCell>
            <TableCell width={'150px'} align="center">Количество</TableCell>
            <TableCell width={'150px'} align="center" >Объем</TableCell>
            <TableCell align="left">Название</TableCell>
            <TableCell align="right">Дата доставки</TableCell>
            <TableCell align="center">Валюта</TableCell>
            <TableCell align="right">Всего</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, i) => (
            <TableRow key={i}>
              <TableCell align="center" sx={{ padding: '0' }}>
                <Checkbox
                  onChange={() => handleChange(product)}
                  checked={selectedProduct.includes(product)}
                />
              </TableCell>
              <TableCell align="center">{product.status}</TableCell>
              <TableCell align="center">{product.sum}</TableCell>
              <TableCell align="center">{product.qty}</TableCell>
              <TableCell align="center">{product.volume}</TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="center">{product.delivery_date}</TableCell>
              <TableCell align="center">{product.currency}</TableCell>
              <TableCell align="right">{getTotal(product)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="center">Общее количество: {getSelectetQty()}</TableCell>
            <TableCell align="center">Общий обьем: {getSelectedValume()}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;