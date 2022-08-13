import React, { FC, useContext, useState } from "react";
import { addMusic, IDataPlayer } from "../Redux/Slice/ListPlayerSlice";
import { useDispatch } from "react-redux";

interface props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMusic: FC<props> = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [image, setImage] = useState("");
  const [music, setMusic] = useState("");

  const dispatch = useDispatch();

  const handelAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMusic: IDataPlayer = {
      id: Math.random(),
      name,
      image,
      music,
      user,
    };

    dispatch(addMusic(newMusic));
    setShowModal(false);
  };

  return (
    <div
      onClick={() => setShowModal(false)}
      className=" modal-amir fixed-top px-5 d-flex align-items-center justify-content-center"
    >
      <form
        onClick={(event) => event.stopPropagation()}
        onSubmit={handelAdd}
        className="w-50 bg-light px-3 py-5 rounded-4 shadow"
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="form-control w-100 mb-4"
          placeholder="name music"
        />
        <input
          value={user}
          onChange={(event) => setUser(event.target.value)}
          type="text"
          className="form-control w-100 mb-4"
          placeholder="name user"
        />
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
          type="url"
          className="form-control w-100 mb-4"
          placeholder="image url"
        />
        <input
          value={music}
          onChange={(event) => setMusic(event.target.value)}
          type="url"
          className="form-control w-100 mb-4"
          placeholder="url online music"
        />
        <button type="submit" className="btn btn-primary">
          Add Music
        </button>
      </form>
    </div>
  );
};

export default ModalMusic;
