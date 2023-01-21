import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    ArtistData,
    SearchQueryResponse,
    Song,
    SongData,
} from "../../assets/interfaces";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set(
                "X-RapidAPI-Key",
                import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
            );

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query<Song[], void>({
            query: () => "/charts/world",
        }),
        getSongsByGenre: builder.query<Song[], string>({
            query: (genre) => `/charts/genre-world?genre_code=${genre}`,
        }),
        getSongsByCountry: builder.query<Song[], string>({
            query: (countryCode) =>
                `/charts/country?country_code=${countryCode}`,
        }),
        getSongsBySearch: builder.query<SearchQueryResponse, string>({
            query: (searchTerm) =>
                `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
        }),
        getArtistDetails: builder.query<ArtistData, string>({
            query: (artistId) => `/artists/details?artist_id=${artistId}`,
        }),
        getSongDetails: builder.query<SongData, { songid: string }>({
            query: ({ songid }) => `/tracks/details?track_id=${songid}`,
        }),
        getSongRelated: builder.query<Song[], { songid: string }>({
            query: ({ songid }) => `/tracks/related?track_id=${songid}`,
        }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;
