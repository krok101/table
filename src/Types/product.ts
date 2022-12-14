export type Status = 'active'| 'archive'

export default interface Product {
  id: string,
  status: Status,
  sum: number,
  qty: number,
  volume: number,
  name: string,
  delivery_date: string,
  currency: string
}