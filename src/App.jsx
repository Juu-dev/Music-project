import React from "react"
import { Routes, Route } from "react-router-dom"

import { DefaultLayout } from "./layouts"
import { AroundYou, Discover, Search, TopArtists, TopCharts, ArtistDetail, SongDetail } from "./pages"

export default function App() {
    return (
        <div>
            <DefaultLayout>
                <div>
                    <Routes>
                        <Route path="/" element={<Discover />} />
                        <Route path="/top-artists" element={<TopArtists />} />
                        <Route path="/top-charts" element={<TopCharts />} />
                        <Route path="/around-you" element={<AroundYou />} />
                        <Route path="/artists/:id" element={<ArtistDetail />} />
                        <Route path="/songs/:songid" element={<SongDetail />} />
                        <Route path="/search/:searchTerm" element={<Search />} />
                    </Routes>
                </div>
            </DefaultLayout>
        </div>
    )
}
