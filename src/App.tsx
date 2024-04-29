import './index.css';
import { menuItems } from './data/db';
import { MenuElem } from './components/MenuElem';
import { useOrder } from './hooks/useOrder';
import { OrderContents } from './components/OrderContents';
import { OrderTotals } from './components/OrderTotals';
import { TypePercentage } from './components/TypePercentage';

export function App() {
  const { addItem, order, removeItem, setTip, tip, saveOrden } = useOrder();

  return (
    <>
      <header className='bg-black text-white py-7'>
        <h1 className='text-center font-black text-4xl'>
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-black '>Menu</h2>
          <div className='space-y-3 mt-10'>
            {menuItems.map((elem) => (
              <MenuElem key={elem.id} elem={elem} addItem={addItem}></MenuElem>
            ))}
          </div>
        </div>

        <div className='border border-dashed border-black p-5 rounded-lg space-y-10'>
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              ></OrderContents>

              <TypePercentage setTip={setTip} tip={tip}></TypePercentage>

              <OrderTotals
                order={order}
                tip={tip}
                saveOrden={saveOrden}
              ></OrderTotals>
            </>
          ) : (
            <p className='text-center'>No hay Ordenes</p>
          )}
        </div>
      </main>
    </>
  );
}
