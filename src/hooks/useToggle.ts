import {useCallback, useState} from 'react';

export const useToggle = (initialState = false) => {
  const [t, setToggle] = useState(initialState);

  const s = useCallback(
    (bool?: boolean) => {
      if (typeof bool === 'boolean') {
        setToggle(bool);
        return;
      }

      setToggle(!t);
    },
    [t],
  );

  return {t, s};
};
