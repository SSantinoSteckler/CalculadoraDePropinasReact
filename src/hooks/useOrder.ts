import { useState } from 'react';
import type { MenuItem, orderItem } from '../types';

export const useOrder = () => {
  const [order, setOrder] = useState<orderItem[]>([]);

  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updateElem = order.map((elem) => {
        if (elem.id === item.id) {
          return { ...elem, cantidad: elem.cantidad + 1 };
        }
        return elem;
      });
      setOrder(updateElem);
    } else {
      const newItem = { ...item, cantidad: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem['id']) => {
    const newOrder = order.filter((elem) => elem.id !== id);
    setOrder(newOrder);
  };

  const saveOrden = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    addItem,
    order,
    removeItem,
    tip,
    setTip,
    saveOrden,
  };
};
