import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DataPlayer from "./data";

export interface IDataPlayer {
  id: number | string;
  name: string;
  image: string;
  user: string;
  music: string;
  like?: boolean;
}

interface IInitialStateListPlayer {
  loading: boolean;
  data: IDataPlayer[];
}

const initialState: IInitialStateListPlayer = {
  loading: false,
  data: DataPlayer,
};

const ListPlayerSlice = createSlice({
  name: "list-player",
  initialState,
  reducers: {
    startDispatchPlayer(state) {
      state.loading = true;
    },
    endDispatchPlayer(state) {
      state.loading = false;
    },
    addMusic(state, action: PayloadAction<IDataPlayer>) {
      state.loading = false;
      state.data = [...state.data, action.payload];
    },
    deleteMusic(state, action: PayloadAction<number | string>) {
      const copyList = [...state.data];
      const newList = copyList.filter((x) => x.id !== action.payload);
      state.data = newList;
    },
  },
});

export const { addMusic, startDispatchPlayer, endDispatchPlayer, deleteMusic } =
  ListPlayerSlice.actions;
export default ListPlayerSlice.reducer;
