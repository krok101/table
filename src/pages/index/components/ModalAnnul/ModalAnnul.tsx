import { useState } from 'react';
import { Button, Dialog,DialogTitle, DialogContent, DialogContentText, DialogActions, Box } from "@mui/material"
import Product from '../../../../Types/product';
import { fetchAnnul } from '../../../../services/product/productAPI';

interface ModalAnnulProps {
  products: Product[]
}

const ModalAnnul = ({products}: ModalAnnulProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false)

  const handleAgree = () => {
    fetchAnnul(products.map(product => product.id));
    handleClose();
  }

  return (
    <>
      <Box justifyContent='flex-end' display='flex' margin={'10px'}>
        <Button
          onClick={() => setOpen(true)}
          disabled={!products.length}
          variant="contained"
        >Аннулировать</Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверены что хотите аннулировать товар(ы): {products.map(product => product.name).join(', ')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отклонить</Button>
          <Button onClick={handleAgree} autoFocus>Применить</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalAnnul