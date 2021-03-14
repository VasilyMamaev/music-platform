import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return {
    value,
    onChange,
  };
};
