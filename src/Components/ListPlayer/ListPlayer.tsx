import React from "react";
import ItemPlayer from "./ItemPlayer";
import { useSelector } from "react-redux";
import { typeRootSlice } from "../../Redux/Slice";

const ListPlayer = () => {
  const playerListData = useSelector(
    (state: typeRootSlice) => state.listPlayer
  );

  return (
    <ul className="player__playlist list">
      {playerListData.data.map((e) => (
        <ItemPlayer key={e.id} itemData={e} />
      ))}
    </ul>
  );
};

export default ListPlayer;
