import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { typeRootSlice } from "../Redux/Slice";
import {
  pauseMusicAction,
  playMusicAction,
  selectMusic,
  startPlayActin,
} from "../Redux/Slice/PlayMusicSlice";
import { FaPause } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
const Header = () => {
  const dispatch = useDispatch();
  const listPlayer = useSelector(
    (state: typeRootSlice) => state.listPlayer,
    shallowEqual
  );
  const selectPlay = useSelector(
    (state: typeRootSlice) => state.selectPlay,
    shallowEqual
  );

  const handelPlay = () => {
    dispatch(startPlayActin());
    if (selectPlay.play) {
      dispatch(pauseMusicAction());
    } else {
      dispatch(playMusicAction());
    }
  };

  useEffect(() => {
    dispatch(selectMusic(listPlayer.data[0]));
  }, []);

  const handelBack = () => {
    const indexPlay = listPlayer.data.findIndex(
      (x) => x.id === selectPlay.data?.id
    );
    if (indexPlay !== 0) {
      dispatch(selectMusic(listPlayer.data[indexPlay - 1]));
    } else {
      dispatch(selectMusic(listPlayer.data[listPlayer.data.length - 1]));
    }
  };

  const handelNext = () => {
    const indexPlay = listPlayer.data.findIndex(
      (x) => x.id === selectPlay.data?.id
    );
    if (indexPlay !== listPlayer.data.length - 1) {
      dispatch(selectMusic(listPlayer.data[indexPlay + 1]));
    } else {
      dispatch(selectMusic(listPlayer.data[0]));
    }
  };

  return (
    <div className="player__header">
      <div className="player__img player__img--absolute slider">
        <button className="player__button player__button--absolute--nw playlist">
          <img
            src="http://physical-authority.surge.sh/imgs/icon/playlist.svg"
            alt="playlist-icon"
          />
        </button>
        <button
          onClick={handelPlay}
          className="player__button player__button--absolute--center play"
        >
          {selectPlay.play ? (
            <FaPause color="#fff" size={30} />
          ) : (
            <BsFillPlayFill color="#fff" size={40} />
          )}
        </button>
        <div className="slider__content">
          <img
            className={`img slider__img`}
            src={selectPlay.data?.image}
            alt="cover"
          />
        </div>
      </div>
      <div className="player__controls">
        <button onClick={handelBack} className="player__button back">
          <img
            className="img"
            src="http://physical-authority.surge.sh/imgs/icon/back.svg"
            alt="back-icon"
          />
        </button>
        <p className="player__context slider__context">
          <strong className="slider__name">{selectPlay.data?.name}</strong>
          <span className="player__title slider__title">
            {selectPlay.data?.user}
          </span>
        </p>
        <button onClick={handelNext} className="player__button next">
          <img
            className="img"
            src="http://physical-authority.surge.sh/imgs/icon/next.svg"
            alt="next-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
