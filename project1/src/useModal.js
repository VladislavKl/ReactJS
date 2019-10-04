import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [counter, setCounter] = useState(0);

  function toggle() {
    setIsShowing(!isShowing);
    setCounter(counter + 1);
  }
  return {
    isShowing,
    counter,
    toggle,
    setCounter
  }
};

export default useModal;