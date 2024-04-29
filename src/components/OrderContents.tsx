import { orderItem } from '../types';
import { currency } from '../helpers/currency';

type MenuOrder = {
  order: orderItem[];
  removeItem: (id: orderItem['id']) => void;
};

export const OrderContents = ({ order, removeItem }: MenuOrder) => {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>
      <div className='space-y-3 mt-5'>
        {order.map((elem) => {
          return (
            <div
              key={elem.id}
              className='flex justify-between border-y border-black py-5 items-center'
            >
              <div>
                <p className='text-lg'>
                  {elem.name} - {currency(elem.price)}
                </p>
                <p className='font-black'>
                  Cantidad: {elem.cantidad} -{' '}
                  {currency(elem.cantidad * elem.price)}
                </p>
              </div>
              <button
                className='bg-red-600 h-8 w-8 rounded-full text-white'
                onClick={() => removeItem(elem.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
