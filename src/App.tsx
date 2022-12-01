import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import ListPlayer from "./Components/ListPlayer/ListPlayer";
import ModalMusic from "./Components/ModalMusic";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url);

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, error } = useSWR("http://localhost:8000/users", fetcher, {
    refreshInterval: 1000,
  });

  console.log(data);

  const handelAddUser = async (event: any) => {
    event.preventDefault();

    const newData = {
      name: "navid",
      age: 4,
    };

    await axios.post("http://localhost:8000/users", newData);
  };

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

      <form action="#" onSubmit={handelAddUser}>
        <input type="text" placeholder="name user" />
        <button>add user</button>
      </form>

      {data?.data.map((e: any, i: number) => (
        <h1 style={{ color: "white" }} key={i}>
          {e.name}
        </h1>
      ))}
    </>
  );
};

export default App;
