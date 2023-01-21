import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "types";

const showFavoritesPost = () => {
  if (!localStorage.getItem("favorites")) {
    localStorage.setItem("favorites", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("favorites") as string);
};

interface IFavoritetState {
  favorites: IPost[];
}

const initialState: IFavoritetState = {
  favorites: showFavoritesPost(),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const selectedPost = state.favorites.find((post) => post.id === payload.id);
      if (!selectedPost) {
        state.favorites.push(payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } else {
        const index = state.favorites.findIndex((post) => post.id === payload.id);
        state.favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
  },
});

export default favoriteSlice.reducer;

export const { toggleFavorite } = favoriteSlice.actions;
