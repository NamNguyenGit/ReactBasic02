import React, { useState } from "react";
import Modal from "./Modal/Modal";
import Backdrop from "./Backdrop/Backdrop";
import List from "./List/List";
import "./Animation.css";

function Animation() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    console.log("called");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal show={modalIsOpen} closed={closeModal} />
      <Backdrop show={modalIsOpen} />
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default Animation;
