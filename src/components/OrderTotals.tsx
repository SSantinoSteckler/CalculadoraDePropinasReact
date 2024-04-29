import { useMemo } from 'react';
import { orderItem } from '../types';
import { currency } from '../helpers/currency';

type OrderTotals = {
  order: orderItem[];
  tip: number;
  saveOrden: () => void;
};

export const OrderTotals = ({ order, tip, saveOrden }: OrderTotals) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.cantidad * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className='space-y-3'>
        <h2 className='font-black text-2xl'>Totales y Propina:</h2>
        <p>
          Subtotal a pagar
          <span className='font-bold'> {currency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:
          <span className='font-bold'> {currency(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar:
          <span className='font-bold'> {currency(totalAmount)}</span>
        </p>
      </div>
      <button
        className='w-full p-5 text-white bg-black disabled:opacity-5'
        onClick={saveOrden}
        disabled={totalAmount === 0}
      >
        GUARDAR ORDEN
      </button>
    </>
  );
};
