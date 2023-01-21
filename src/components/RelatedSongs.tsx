import { Song } from "../assets/interfaces";
import SongBar from "./SongBar";

type Props = {
    data: Song[] | undefined;
    artistId: string;
    isPlaying: boolean;
    activeSong: Song | Record<string, never> | undefined;
    handlePauseClick?: () => void;
    handlePlayClick?: (song: Song, index: number) => void;
};

const RelatedSongs = ({
    data,
    artistId,
    isPlaying,
    activeSong,
    handlePauseClick,
    handlePlayClick,
}: Props) => (
    <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

        <div className="mt-6 w-full flex flex-col">
            {data?.map((song, i) => (
                <SongBar
                    key={`${artistId}-${song.key}-${i}`}
                    song={song}
                    i={i}
                    artistId={artistId}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                />
            ))}
        </div>
    </div>
);

export default RelatedSongs;
