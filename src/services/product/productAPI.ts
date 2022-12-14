import Product from "../../Types/product";

const data1: Product[] = [
  {
    id: '0',
    status: 'active',
    sum: 100,
    qty: 5,
    volume: 10,
    name: 'some_nome_1',
    delivery_date: '20.12.22',
    currency: '$'
  },
]


const data2: Product[] = [
  {
    id: '0',
    status: 'active',
    sum: 100,
    qty: 5,
    volume: 10,
    name: 'some_nome_2_data2',
    delivery_date: '20.12.22',
    currency: '$'
  },
]


// A mock function to mimic making an async request for data
export function fetchProduct1() {
  return new Promise<{ data: Product[] }>((resolve) =>
    setTimeout(() => resolve({ data: data1 }), 500)
  );
}

export function fetchProduct2() {
  return new Promise<{ data: Product[] }>((resolve) =>
    setTimeout(() => resolve({ data: data2 }), 1500)
  );
}
