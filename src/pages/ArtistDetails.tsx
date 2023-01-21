import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useAppSelector } from "../redux/hooks";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useAppSelector((state) => state.player);
    const {
        data: artistData,
        isFetching: isFetchingArtistDetails,
        error,
    } = useGetArtistDetailsQuery(artistId as string);

    if (isFetchingArtistDetails)
        return <Loader title="Loading artist details..." />;

    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData} />

            <RelatedSongs
                data={Object.values(artistData?.songs ?? {})}
                artistId={artistId as string}
                isPlaying={isPlaying}
                activeSong={activeSong}
            />
        </div>
    );
};

export default ArtistDetails;
