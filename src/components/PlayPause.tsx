import { MouseEventHandler } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Song, Track } from "../assets/interfaces";

type Props = {
    handlePlay?: MouseEventHandler<SVGSVGElement>;
    handlePause?: MouseEventHandler<SVGSVGElement>;
    song: Song | Track;
    activeSong: Song | Record<string, never> | undefined;
    isPlaying: boolean;
};

const PlayPause = ({
    isPlaying,
    activeSong,
    song,
    handlePause,
    handlePlay,
}: Props) =>
    isPlaying && activeSong?.title === song.title ? (
        <FaPauseCircle
            size={35}
            className="text-gray-300"
            onClick={handlePause}
        />
    ) : (
        <FaPlayCircle
            size={35}
            className="text-gray-300"
            onClick={handlePlay}
        />
    );

export default PlayPause;
