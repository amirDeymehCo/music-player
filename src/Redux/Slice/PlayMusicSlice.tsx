import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataPlayer } from "./ListPlayerSlice";

interface IInitialStatePlayMusic {
  data: IDataPlayer | null;
  loading: boolean;
  play: boolean;
}

const initialState: IInitialStatePlayMusic = {
  data: null,
  loading: false,
  play: false,
};

const PlayMusicSlice = createSlice({
  name: "play-music",
  initialState,
  reducers: {
    startPlayActin(state) {
      state.loading = true;
    },
    playMusicAction(state) {
      state.loading = false;
      state.play = true;
    },
    pauseMusicAction(state) {
      state.loading = false;
      state.play = false;
    },
    selectMusic(state, action: PayloadAction<IDataPlayer>) {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const {
  startPlayActin,
  pauseMusicAction,
  playMusicAction,
  selectMusic,
} = PlayMusicSlice.actions;

export default PlayMusicSlice.reducer;
