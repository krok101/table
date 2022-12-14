import Product from '../../Types/product';

const data1: Product[] = [
  {
    id: '0',
    status: 'archive',
    sum: 10,
    qty: 5,
    volume: 10,
    name: 'some_nome_11',
    delivery_date: '2022.12.22',
    currency: '$'
  },
  {
    id: '1',
    status: 'active',
    sum: 120,
    qty: 5,
    volume: 10,
    name: 'some_nome_1',
    delivery_date: '2022.12.21',
    currency: '₽'
  },
  {
    id: '2',
    status: 'archive',
    sum: 100,
    qty: 5,
    volume: 10,
    name: 'some_nom3e_1',
    delivery_date: '2022.12.21',
    currency: '₽'
  },
  {
    id: '3',
    status: 'active',
    sum: 100,
    qty: 7,
    volume: 10,
    name: 'some_nome_1',
    delivery_date: '2022.12.23',
    currency: '$'
  },
];


const data2: Product[] = [
  {
    id: '0',
    status: 'archive',
    sum: 100,
    qty: 7,
    volume: 10,
    name: 'some_nome_2_data2',
    delivery_date: '2022.12.21',
    currency: '$'
  },
  {
    id: '1',
    status: 'active',
    sum: 100,
    qty: 3,
    volume: 10,
    name: 'some_nome_2_data2',
    delivery_date: '2022.12.08',
    currency: '$'
  },
  {
    id: '2',
    status: 'active',
    sum: 100,
    qty: 3,
    volume: 10,
    name: 'some_nome_2_data2',
    delivery_date: '2022.12.22',
    currency: '$'
  },
  {
    id: '3',
    status: 'active',
    sum: 100,
    qty: 5,
    volume: 10,
    name: 'some_nome_2_data2',
    delivery_date: '2022.12.22',
    currency: '$'
  },
  {
    id: '4',
    status: 'active',
    sum: 100,
    qty: 4,
    volume: 10,
    name: 'some_nome_2_data2',
    delivery_date: '2022.12.22',
    currency: '$'
  },
];

export async function fetchProduct1() {
  /*
  const response = await fetch('/documents1', {
    headers: { 'Content-Type': 'application/json' }
  });
  return await response.json();
  */
  return new Promise<{ data: Product[] }>((resolve) =>
    setTimeout(() => resolve({ data: data1 }), 400)
  );
}

export async function fetchProduct2() {
  /*
  const response = await fetch('/documents2', {
    headers: { 'Content-Type': 'application/json' }
  });
  return await response.json();
  */
  return new Promise<{ data: Product[] }>((resolve) =>
    setTimeout(() => resolve({ data: data2 }), 900)
  );
}

export const fetchAnnul = async (id: Array<String>) => {
  return await fetch('/cancel', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({id}),
  });
};
