import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../assets/interfaces";
import { RootState } from "../store";

export type IState = {
    currentSongs: Song[];
    currentIndex: number;
    isActive: boolean;
    isPlaying: boolean;
    activeSong?: Song | Record<string, never> | undefined;
    genreListId: string;
};

const initialState: IState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: "",
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song;

            if (action.payload?.data?.tracks?.hits) {
                state.currentSongs = action.payload.data.tracks.hits;
            } else if (action.payload?.data?.properties) {
                state.currentSongs = action.payload?.data?.tracks;
            } else {
                state.currentSongs = action.payload.data;
            }

            state.currentIndex = action.payload.i;
            state.isActive = true;
        },

        nextSong: (state, action: PayloadAction<number>) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        prevSong: (state, action: PayloadAction<number>) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        playPause: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },

        selectGenreListId: (state, action: PayloadAction<string>) => {
            state.genreListId = action.payload;
        },
    },
});

export const {
    setActiveSong,
    nextSong,
    prevSong,
    playPause,
    selectGenreListId,
} = playerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPlay = (state: RootState) => state.player;

export default playerSlice.reducer;
