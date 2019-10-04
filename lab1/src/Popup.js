import React from "react";
import Modal from "./Modal";
import useModal from './useModal';

function Popup () {
  const {isShowing, counter, toggle,setCounter} = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>My little secret</button>
      <Modal
        isShowing={isShowing}
        counter={counter}
        hide={toggle}
        setCounter={setCounter}
      />
    </div>
  );
};

export default Popup;