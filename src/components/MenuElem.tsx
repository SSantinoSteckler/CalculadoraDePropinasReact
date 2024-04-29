import type { MenuItem } from '../types/index.ts';

type menuItemsProps = {
  elem: MenuItem;
  addItem: (elem: MenuItem) => void;
};

export const MenuElem = ({ elem, addItem }: menuItemsProps) => {
  return (
    <button
      className='w-full border-2 border-black flex justify-between p-3 transition-all hover:bg-slate-400'
      onClick={() => addItem(elem)}
    >
      <p>{elem.name}</p>
      <p className='font-black'>${elem.price}</p>
    </button>
  );
};
