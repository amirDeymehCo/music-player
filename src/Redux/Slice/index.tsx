import store from "../store";
import ListPlayerSlice from "./ListPlayerSlice";
import PlayMusicSlice from "./PlayMusicSlice";

const RootSlice = {
  listPlayer: ListPlayerSlice,
  selectPlay: PlayMusicSlice,
};

export type typeRootSlice = ReturnType<typeof store.getState>;

export default RootSlice;
