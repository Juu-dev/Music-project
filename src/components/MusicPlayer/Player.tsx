import { useRef, useEffect, ReactEventHandler } from "react";
import { Song } from "../../assets/interfaces";

type Props = {
    activeSong: Song;
    isPlaying: boolean;
    volume: number;
    seekTime: number;
    onEnded: ReactEventHandler<HTMLAudioElement>;
    onTimeUpdate: ReactEventHandler<HTMLAudioElement>;
    onLoadedData: ReactEventHandler<HTMLAudioElement>;
    repeat: boolean;
    currentIndex: number;
};

const Player = ({
    activeSong,
    isPlaying,
    volume,
    seekTime,
    onEnded,
    onTimeUpdate,
    onLoadedData,
    repeat,
    currentIndex,
}: Props) => {
    const ref = useRef<HTMLAudioElement>(null);
    // eslint-disable-next-line no-unused-expressions
    if (ref.current) {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.volume = volume;
        }
    }, [volume]);
    // updates audio element only on seekTime change (and not on each rerender):
    useEffect(() => {
        if (ref.current) {
            ref.current.currentTime = seekTime;
        }
    }, [seekTime]);

    return (
        <audio
            src={activeSong?.hub?.actions[1]?.uri}
            ref={ref}
            loop={repeat}
            onEnded={onEnded}
            onTimeUpdate={onTimeUpdate}
            onLoadedData={onLoadedData}
        />
    );
};

export default Player;
