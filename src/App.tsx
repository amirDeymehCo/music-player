import React, { useContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import ListPlayer from "./Components/ListPlayer/ListPlayer";
import ModalMusic from "./Components/ModalMusic";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <ModalMusic setShowModal={setShowModal} />}
      <div className="alert alert-info d-flex align-items-center justify-content-between">
        <span>List music</span>
        <button onClick={() => setShowModal(true)} className="btn btn-sm">
          Add Music
        </button>
      </div>
      <div className="player">
        <Header />
        <ListPlayer />
      </div>
    </>
  );
};

export default App;
