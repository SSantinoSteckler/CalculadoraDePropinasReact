const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%',
  },
];

type TypePercentageProp = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

export const TypePercentage = ({ setTip, tip }: TypePercentageProp) => {
  return (
    <div>
      <h3 className='font-black text-2xl'>Propina:</h3>

      <form>
        {tipOptions.map((tipOptions) => (
          <div className='flex gap-2' key={tipOptions.id}>
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input
              type='radio'
              name='tip'
              value={tipOptions.value}
              id={tipOptions.id}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOptions.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
