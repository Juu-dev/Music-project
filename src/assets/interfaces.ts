export interface Artist {
    adamid: string;
    alias: string;
    id: string;
}

export enum Name {
    Apple = "apple",
    HubApplemusicDeeplink = "hub:applemusic:deeplink",
}

export enum ActionType {
    Applemusicopen = "applemusicopen",
    Applemusicplay = "applemusicplay",
    URI = "uri",
}

export interface Action {
    id?: string;
    name: Name;
    type: ActionType;
    uri?: string;
}

export interface Hub {
    actions: Action[];
    displayname: Displayname;
    explicit: boolean;
    image: string;
    options: Option[];
    type: HubType;
}

export interface Images {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
}

export interface Share {
    avatar: string;
    href: string;
    html: string;
    image: string;
    snapchat: string;
    subject: string;
    text: string;
    twitter: string;
}

export interface Artwork {
    url: string;
}

export interface Attributes {
    name: string;
    albumName: string;
    artwork: Artwork;
}

export interface Song {
    artists: Artist[];
    hub: Hub;
    images: Images;
    key: string;
    layout: string;
    share: Share;
    subtitle: string;
    title: string;
    url: string;
    attributes: Attributes;
    track: Song;
    // tracks: Tracks;
}

export enum Displayname {
    AppleMusic = "APPLE MUSIC",
}

export interface Option {
    actions: Action[];
    beacondata: Beacondata;
    caption: Caption;
    colouroverflowimage: boolean;
    image: string;
    listcaption: Listcaption;
    overflowimage: string;
    providername: Providername;
    type: BeacondataType;
}

export interface Beacondata {
    providername: Providername;
    type: BeacondataType;
}

export enum Providername {
    Applemusic = "applemusic",
}

export enum BeacondataType {
    Open = "open",
}

export enum Caption {
    Open = "OPEN",
}

export enum Listcaption {
    OpenInAppleMusic = "Open in Apple Music",
}

export enum HubType {
    Applemusic = "APPLEMUSIC",
}

export interface SongData {
    albumadamid: string;
    alias: string;
    artists: Artist[];
    genres: Genres;
    hub: Hub;
    images: Images;
    isrc: string;
    key: string;
    layout: string;
    releasedate: string;
    sections: Section[];
    share: Share;
    subtitle: string;
    title: string;
    trackadamid: string;
    type: string;
    url: string;
    urlparams: Urlparams;
}

export interface Genres {
    primary: string;
}

export interface Section {
    metadata?: Metadatum[];
    metapages?: Metapage[];
    tabname: string;
    type: string;
    text: string[];
}

export interface Metadatum {
    text: string;
    title: string;
}

export interface Metapage {
    caption: string;
    image: string;
}

export interface Urlparams {
    "{trackartist}": string;
    "{tracktitle}": string;
}

export interface ArtistData {
    albums: { [key: string]: Album };
    artists: Artists[];
    songs: Song[];
}

export interface Album {
    attributes?: AlbumAttributes;
    href: string;
    id: string;
    type: Type;
}

export interface AlbumAttributes {
    albumName?: string;
    artistName: Name;
    artwork: Artwork;
    copyright?: string;
    discNumber?: number;
    durationInMillis?: number;
    editorialNotes?: PurpleEditorialNotes;
    genreNames: string[];
    hasLyrics?: boolean;
    hasTimeSyncedLyrics?: boolean;
    isAppleDigitalMaster?: boolean;
    isCompilation?: boolean;
    isComplete?: boolean;
    isMasteredForItunes: boolean;
    isPrerelease?: boolean;
    isSingle?: boolean;
    isrc?: string;
    name: string;
    playParams: PlayParams;
    previews?: Preview[];
    releaseDate: Date;
    trackCount?: number;
    trackNumber?: number;
    upc?: string;
    url: string;
}

export interface Artwork {
    bgColor: string;
    hasP3: boolean;
    height: number;
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
    url: string;
    width: number;
}

export interface PurpleEditorialNotes {
    short: string;
    standard?: string;
}

export interface PlayParams {
    id: string;
}

export interface Preview {
    url: string;
}

export enum Type {
    Albums = "albums",
    Songs = "songs",
}

export interface Artists {
    id: string;
    type: string;
    href: string;
    attributes: ArtistsAttributes;
}

export interface ArtistsAttributes {
    genreNames: string[];
    name: string;
    artwork: Artwork;
    relationships: Relationships;
}

export interface Artwork {
    width: number;
    height: number;
    url: string;
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
    bgColor: string;
    hasP3: boolean;
}

export interface Relationships {
    albums: Albums;
}

export interface Albums {
    attributes?: AlbumsAttributes;
    data: AlbumsData[];
    href: string;
    next: string;
}

export interface AlbumsAttributes {
    title: string;
}

export interface AlbumsData {
    href: string;
    id: string;
    type: Type;
}

export interface SearchQueryResponse {
    tracks: Tracks;
    artists: Artists;
}

export interface Tracks {
    hits: Hit[];
}

export interface Hit {
    track: Track;
}

export interface Track {
    layout: string;
    type: string;
    key: string;
    title: string;
    subtitle: string;
    share: Share;
    images: Images;
    hub: Hub;
    artists: Artist[];
    url: string;
}
