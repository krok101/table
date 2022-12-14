type status = 'active'| 'archive'

export default interface Product {
  id: string,
  status: status,
  sum: number,
  qty: number,
  volume: number,
  name: string,
  delivery_date: string,
  currency: string
}