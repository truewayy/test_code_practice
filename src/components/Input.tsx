import { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>{value}</div>
      <input type='text' value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
