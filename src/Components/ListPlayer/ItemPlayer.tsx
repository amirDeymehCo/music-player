import React, { FC, useEffect, useRef } from "react";
import { deleteMusic, IDataPlayer } from "../../Redux/Slice/ListPlayerSlice";
import { useDispatch } from "react-redux";
import {
  pauseMusicAction,
  playMusicAction,
  selectMusic,
  startPlayActin,
} from "../../Redux/Slice/PlayMusicSlice";
import { typeRootSlice } from "../../Redux/Slice";
import { useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
interface IProps {
  itemData: IDataPlayer;
}
const ItemPlayer: FC<IProps> = ({ itemData }) => {
  const dispatch = useDispatch();
  const selectPlay = useSelector((state: typeRootSlice) => state.selectPlay);
  const listMusic = useSelector((state: typeRootSlice) => state.listPlayer);

  const musicElement = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (selectPlay.data?.id === itemData.id && selectPlay.play) {
      musicElement.current?.play();
    } else {
      musicElement.current?.pause();
    }
  }, [selectPlay.data, selectPlay.play, itemData.id]);

  const handelSelectPlay = () => {
    if (musicElement.current) {
      musicElement.current.currentTime = 0;
    }
    dispatch(startPlayActin());
    dispatch(selectMusic(itemData));
    dispatch(playMusicAction());
  };

  const handelDelete = () => {
    if (selectPlay.data?.id === itemData.id) {
      const copyList = [...listMusic.data];
      const filter = copyList.filter((x) => x.id !== itemData.id);
      if (filter.length <= 0) {
        alert("تعداد آهنک ها نمیتواند کمتر از 1 باشد");
        return null;
      }
      dispatch(selectMusic(filter[0]));
    }
    dispatch(deleteMusic(itemData.id));
    dispatch(playMusicAction());
  };

  return (
    <li className="player__song " onClick={handelSelectPlay}>
      <img
        className={`player__img img`}
        src={itemData.image}
        alt="Make Me Move (feat. KARRA)"
        title="Make Me Move (feat. KARRA)"
      />
      <p className="player__context ">
        <b className="player__song-name">{itemData.name}</b>
        <span className="flex">
          <span className="player__title">{itemData.user}</span>
          <span className="player__song-time"></span>
        </span>
        <div className="div-btn-amir">
          <button onClick={handelDelete} className="btn-delete bnt-info">
            <AiFillCloseCircle size={22} color="#e91e63" />
          </button>
        </div>
      </p>
      <audio className="audio" ref={musicElement} src={itemData.music}></audio>
    </li>
  );
};
export default ItemPlayer;
